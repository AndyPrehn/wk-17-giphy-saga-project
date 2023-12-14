import React, { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';

export default function FavoritesPage() {
    const dispatch = useDispatch(); 
    const favoriteStore = useSelector(store => store.favoriteResults);
    console.log(`store:`, favoriteStore);

    useEffect(() => {
        const action = {type: 'FETCH_FAVORITES'};
        dispatch(action);
    }, []);
    
    // <img src={item.images.fixed_height.url} alt={item.title} />

    // page load, dispatch to your saga for axios request to favorites

    return (
        <div id='favorites-page'>
            <h1>Displaying Your Favorites</h1>

            <div className='result-display'>
                {favoriteStore?.map((item, i) =>
                    <div className='result-item' key={i}>
                        <img src={item.gif_url} />
                    </div>
                )}
            </div>

        </div>
    )
}