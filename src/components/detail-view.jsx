import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import './detail-view.scss';
import { setFav, unsetFav } from '../api';
import Voting from './voting';


export default function DetailView(props) {

    const cat = props.cat;
    const [isFav, setIsFav] = useState(props.cat.isFav);

    const toggleFav = () => {
        if (isFav) {
            unsetFav(cat.favId).then(resp => {
                setIsFav(false);
            })
        } else {
            setFav({ image_id: cat.id }).then(resp => {
                setIsFav(true);
            })
        }
    }

    return (<>
        <div className="cat-box">
            <FontAwesomeIcon className={isFav ? 'heart red' : 'heart grey'} icon={faHeart} size="lg" onClick={toggleFav} />
            <div className="cat-img-container"><img className="cat-img" alt="cat" src={cat.url} /></div>
            <Voting cat={cat} />
        </div>
    </>
    )
}