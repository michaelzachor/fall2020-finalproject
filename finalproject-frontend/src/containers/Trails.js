import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowReviews from '../components/ShowReviews'

function Trails({trailsArray}) {
    
    const [theArray, settheArray] = useState([]);
      useEffect(() => {
        axios
        .get(
            `https://whispering-bastion-69731.herokuapp.com/all-reviews`
            )
        .then(function (response) {
          if (response.data) {
            settheArray(response.data);
          }
        })
        .catch(function (error) {
            console.warn(error);
        })
    }, []);

    return (
        <div>
            <h2>Trails</h2>
            <div>
                <ul>
                    {trailsArray.map((trail, j) => {
                        return (
                        <li key={j}>
                            <div className="placeTitle">
                                <h3 className="placeName">{trail.name}</h3>
                                <div className={trail.level}></div>
                            </div>
                            <div className={trail.code}>
                                <ul>
                                    <li className="rate"><a href={trail.link}>Rate it!</a></li>
                                    <li>
                                    {theArray.map((item, i) => {
                                        if (item.name === trail.code) {
                                            return (
                                            <div key={i}>
                                                <div className="reviewName">{item.userEmail}: </div>
                                                <ShowReviews item={item} isTrail={true} />
                                            </div>
                                        )}
                                    })}
                                    </li>
                                </ul>
                            </div>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    );
}

export default Trails;