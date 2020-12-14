import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import ShowReviews from '../components/ShowReviews'

function Trails() {
    let trailsArray = [{name:"Great Eastern", code: "Great_Eastern", link: "/review/Great_Eastern", level: "circle"}, {name: "Chute", code: "Chute", link: "/review/Chute", level: "square"}];
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
                        console.log("trail: ", trail.name);
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

// function showOrHide(trail, num) {
//     console.log('calling function');
//     console.log(btntxt[0])
//     btntxt[0] = "Less Info"
//     console.log(btntxt[0])
    // let info = document.getElementsByClassName(trail);
    // let btnText = document.getElementsByClassName("showHideButton")[0].outerText;
    // console.log(btnText);
    // btnText.innerHTML = "check";
    // console.log(btnText);
    // if (btnText == "Show Info") {
    //     console.log('if');
    //     // btnText = "Hide Info";
    //     // btnText.setState("Hide Info");
    //     // info.style.display = "block";
    // } else {
    //     console.log('else');
    //     // btnText.setState("Show Info");
    //     // info.style.display = "none";
    // }
// }

export default Trails;