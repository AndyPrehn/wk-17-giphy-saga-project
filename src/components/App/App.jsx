import SearchView from '../SearchView/SearchView.jsx';
import './App.css';
import FavoritesPage from '../FavoritesPage/FavoritesPage.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div id='web-app'>
      <Router>
        <h1>Giphy Search!</h1>

        <div id='nav-bar'>
          <ul>
            <li><Link to='/'>Search Giphy</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
          </ul>

        </div>

        <Route exact path='/'>
          <SearchView />
        </Route>

        <Route exact path='/favorites'>
          <FavoritesPage />
        </Route>

      </Router>
    </div>
  );
}


export default App;
