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


    return (
        <div>
            <div>
                <p>this is the search page</p>

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

            {/* <div>
                {searchResults.data.map((item) =>
                    <div key={item.id}>
                        <img src={item.images.fixed_height.url} alt={item.title} />
                    </div>
                )}
            </div> */}
        </div>
    )
}