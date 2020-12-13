import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import ShowReviews from '../components/ShowReviews';

function Apres() {
    let apresArray = [{name:"Strangefellows Pub", code: "Strangefellows_Pub", link: "/review/Strangefellows_Pub", level: "bar"}, {name: "The Lookout Tavern", code: "The_Lookout_Tavern", link: "/review/The_Lookout_Tavern", level: "restaurant"}];
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
                        console.log("place: ", trail.name);
                        return (
                        <li key={j}>
                            <h3>{trail.name}</h3>
                            <div classname={trail.code}>
                                <ul>
                                    <li><a href={trail.link}>Rate this trail!</a></li>
                                    <li>
                                    {theArray.map((item, i) => {
                                        console.log("in apres", item)
                                        if (item.name === trail.code) {
                                            return (
                                            <div key={i}>
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