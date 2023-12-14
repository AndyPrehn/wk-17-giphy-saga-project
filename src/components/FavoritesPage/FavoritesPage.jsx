import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';


export default function FavoritesPage() {
    const dispatch = useDispatch(); 
    const favoriteStore = useSelector(store => store.favoriteResults);
    console.log(`store:`, favoriteStore);

    let [category, setCategory] = useState('');

    useEffect(() => {
        const action = {type: 'FETCH_FAVORITES'};
        dispatch(action);
    }, []);
    
    function addNewCategory(id) {
        console.log(`updating category`);
        axios.put(`/api/favorites/${id}`, category).then(() => {
            console.log(`success in PUT`);
            dispatch({ type: 'FETCH_FAVORITES' });
        }).catch((error) => {
            console.log(`error in put`, error);
            alert(`something went wrong`);
        });    
    }

    return (
        <div id='favorites-page'>
            <h1>Displaying Your Favorites</h1>

            <div className='result-display'>
                {favoriteStore?.map((item, i) =>
                    <div className='result-item' key={item.id}>
                        <p>{item.id}</p>
                        <img src={item.gif_url} />


                        <p>Category:{item.category}</p>
                        <select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value='1'>Wild</option>
                            <option value='2'>Uproarious</option>
                            <option value='3'>Poignant</option>
                            <option value='4'>Felicitous</option>
                            <option value='5'>Whimsical</option>
                        </select>
                        {category}

                        <button onClick={() => addNewCategory(item.id)}>Save Category</button>

                    </div>
                )}
            </div>

        </div>
    )
}