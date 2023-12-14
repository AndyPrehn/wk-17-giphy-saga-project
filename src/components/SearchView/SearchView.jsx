import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function SearchView() {
    const dispatch = useDispatch();
    const searchResults = useSelector(store => store.searchResults);

    const [searchString, setSearchString] = useState('');

    const searchGiphy = () => {
        console.log(`searching for you giphysss`);

        dispatch({ type: 'FETCH_GIPHY', payload: searchString })
    }
    
    function addNewFavorite(giphy) {
        console.log(`favoriting giphy:`, giphy);
        
        dispatch({ type: 'ADD_FAVORITE_GIPHY' , payload: giphy});
    }


    return (
        <div id='search-view'>
            <div id='input-type'>
                <p>Find your Giphy!</p>

                <input
                    type='text'
                    placeholder='search text'
                    value={searchString}
                    onChange={e => setSearchString(e.target.value)}
                >
                </input>

                {searchString}

                <button
                    id='search-button'
                    onClick={() => searchGiphy()}
                >Search</button>
            </div>

            <div className='result-display'>
                {searchResults?.data?.map((item) =>
                    <div className='result-item' key={item.id}>
                        <img src={item.images.fixed_height.url} alt={item.title} />
                        <button onClick={() => addNewFavorite(item)}>Favorite</button>
                    </div>
                )}
            </div>
        </div>
    )
}