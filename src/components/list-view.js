import React, { useState, useEffect } from 'react';
import { getImages, getAllFav, getAllVotes } from '../api';
import DetailView from './detail-view';
import './list-view.scss';
import axios from "axios";

export default function ListView() {

    const [catList, setCatList] = useState([]);
    const [favList, setFavList] = useState([]);

    useEffect(() => {
        const payload = { limit: 100 };

        axios.all([getImages(payload), getAllFav(payload), getAllVotes(payload)])
            .then(axios.spread((imageData, favData, voteData) => {
                const favIdList = favData.reduce((acc, eachFav) => {
                    return {
                        ...acc,
                        [eachFav.image_id]: eachFav.id
                    }
                }, {});

                const scoreList = voteData.reduce((acc, eachVote) => {
                    if (acc[eachVote.image_id]) {
                        if (eachVote.value === 1) {
                            acc[eachVote.image_id] = acc[eachVote.image_id] + 1;
                        } else {
                            acc[eachVote.image_id] = acc[eachVote.image_id] - 1
                        }
                    } else {
                        acc[eachVote.image_id] = (eachVote.value === 1) ? 1 : -1;
                    }
                    return acc;
                }, {});

                const updatedImageList = imageData.map(eachImage => {
                    return {
                        ...eachImage,
                        isFav: Object.keys(favIdList).includes(eachImage.id),
                        favId: favIdList[eachImage.id],
                        score: scoreList[eachImage.id]? scoreList[eachImage.id]: 0
                    }
                });
                setCatList(updatedImageList);
            }));
    }, []);

    return (<React.Fragment>
        <h2>List of Cats</h2>
        <div className="cat-container">
            {(catList.length && catList.map(cat =>
                <DetailView key={cat.id} cat={cat}></DetailView>
            ))}
        </div>
    </React.Fragment>
    )
}