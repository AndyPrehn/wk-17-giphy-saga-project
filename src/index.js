import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga() {
  yield takeEvery('FETCH_GIPHY', fetchAllGiphy);
  yield takeEvery('FETCH_FAVORITES', fetchFavorites);
  yield takeEvery('ADD_FAVORITE_GIPHY', addFavoriteGiphy)
}

// POST favorite giph to server
function* addFavoriteGiphy(action) {
  try {
    console.log('in addFavoriteGiphy', action.payload);
    yield axios.post('/api/favorites', action.payload);
  } catch (error) {
    console.log(`error in POST`, error);
    alert(`something went wrong`);
  }
}

function* fetchAllGiphy(action) {
  try {
    console.log(`fetching Giphy with payload:`, action.payload);

    const results = yield axios.get(`https://api.giphy.com/v1/gifs/search?api_key=jyDft0GCAjYYgD8vwr9ETMXA7MhaRrog&q=${action.payload}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const setResultsAction = {type: 'SET_RESULTS', payload: results.data};
    yield put(setResultsAction);
  
  } catch (error) {
    console.log(`error in GET /api/giphy`);
    alert(`something went wrong`);
  }
}

function* fetchFavorites() {
  try {
    console.log('Fetching favorite gifs');
    const results = yield axios.get('/api/favorites')
    const setFavoriteAction = {type: 'SET_FAVORITES', payload: results.data};
    yield put(setFavoriteAction);
  } catch (error) {
    console.log('Unable to retrieve favorites');
    alert('unable to retrieve favorite gifs');
  }
}

const searchResults = (state = {}, action) => {
  switch(action.type) {
    case 'SET_RESULTS':
      return action.payload;
    default:
      return state;
  }
};

const favoriteResults = (state = [], action) => {
  switch(action.type) {
    case'SET_FAVORITES':
      return action.payload;
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    searchResults,
    favoriteResults
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
