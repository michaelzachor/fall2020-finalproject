import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import ShowReviews from './ShowReviews'

function UserProfileComponent({userInformation}) {
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
    return <ul>
        <li>
            <div><h3>Email:</h3>{userInformation.email}</div>
        </li>
        <li>
            <h3>Reviews:</h3>
            <ul>
            {theArray.map((item, i) => {
                if (item.userEmail === userInformation.email) {
                    return (
                        <li key={i}>
                            <div className="reviewName">{item.name.replace(/_/g, " ")}</div>
                            {item.type === "trail" ? <ShowReviews item={item} isTrail={true} /> : <ShowReviews item={item} isTrail={false} />}
                        </li>
            )}})}
            </ul>
        </li>
    </ul>
}

export default UserProfileComponent;