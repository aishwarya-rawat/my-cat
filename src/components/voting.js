import React, { useState } from 'react';

import { vote } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import './voting.scss';

export default function Voting(props) {

    const [cat, setCat] = useState(props.cat);
    const [score, setScore] = useState(props.cat.score)

    const onVote = (val) => {
        const payload = {
            image_id: cat.id,
            value: val
        }
        vote(payload).then(res => {
            if(val === 1){
                setScore(score+1);
            }else{
                setScore(score-1);
            }
        })
    }

    return (
        <React.Fragment>
            <div className="voting-container">
                <FontAwesomeIcon className="vote-icon" icon={faThumbsUp} size="lg" onClick={() => onVote(1)} />
                <span>{score}</span>
                <FontAwesomeIcon className="vote-icon" icon={faThumbsDown} size="lg" onClick={() => onVote(0)} />
            </div>
        </React.Fragment>

    )
}