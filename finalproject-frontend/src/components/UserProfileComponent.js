import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';

// take in userInformation from UserProfile.js
// display userInformation
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
    return <div>
            <div><h3>Email:</h3>{userInformation.email}</div>
            <h3>Reviews:</h3>
            {theArray.map((item, i) => {
                console.log(item.data);
                if (item.userEmail === userInformation.email) {
                return (
                <div key={i} className="UserReview">
                    <h4>{item.name}</h4>
                    <div className="boxes">
                        <div className="difficultyBox">
                            <div>Difficulty</div>
                            <div>{item.difficulty}/5</div>
                        </div>
                        <div className="funBox">
                            <div>Fun</div>
                            <div>{item.fun}/5</div>
                        </div>
                    </div>
                    <div>Tags: {item.tags}</div>
                    {/* <div>Tags: {Array.isArray(item.data.tags) ? item.data.tags : item.data.tags.map((tag, i) => <span key={i}>tag</span>)}</div> */}
                    {/* <div>Tags: {item.data.tags.length === 1 ? item.data.tags : item.data.tags.join(", ")}</div> */}
                    <div>Watch out for: {item.watchout}</div>
                    <div>{item.review}</div>
                </div>
            )}})}
    </div>
}

export default UserProfileComponent;