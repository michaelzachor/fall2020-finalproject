import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowReviews from '../components/ShowReviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUtensils, faGlassCheers} from '@fortawesome/free-solid-svg-icons';

function Apres() {
    let apresArray = [
        {name:"Strangefellows Pub", code: "Strangefellows_Pub", link: "/review/Strangefellows_Pub", level: "bar"}, 
        {name: "The Lookout Tavern", code: "The_Lookout_Tavern", link: "/review/The_Lookout_Tavern", level: "restaurant"},
        {name: "The Garlic", code: "The_Garlic", link: "/review/The_Garlic", level: "restaurant"},
        {name: "The Pickle Barrel", code: "The_Pickle_Barrel", link: "/review/The_Pickle_Barrel", level: "bar"},
        {name: "JAX Food and Games", code: "JAX_Food_and_Games", link: "/review/JAX_Food_and_Games", level: "bar"},
        {name: "Sushi Yoshi", code: "Sushi_Yoshi", link: "/review/Sushi_Yoshi", level: "restaurant"}
    ];
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
            <h2>Apres Ski</h2>
            <div>
                <ul>
                    {apresArray.map((trail, j) => {
                        return (
                        <li key={j}>
                            <h3 className="placeName">{trail.name}</h3>
                            {trail.level === "bar" ? <FontAwesomeIcon className="icons" icon={faGlassCheers} />
                                                   : <FontAwesomeIcon className="icons" icon={faUtensils} />}
                            <div classname={trail.code}>
                                <ul>
                                    <li className="rate"><a href={trail.link}>Rate it!</a></li>
                                    <li>
                                    {theArray.map((item, i) => {
                                        if (item.name === trail.code) {
                                            return (
                                            <div key={i}>
                                                <div className="reviewName">{item.userEmail}: </div>
                                                <ShowReviews item={item} isTrail={false} />
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

export default Apres;