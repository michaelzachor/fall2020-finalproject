import React from 'react';

// take in userInformation from UserProfile.js
// display userInformation
function UserProfileComponent({userInformation, reviewArray}) {
    console.log(reviewArray);
    return <div>
            <div><h3>Email:</h3>{userInformation.email}</div>
            {/* <div /> */}
            <h3>Reviews:</h3>
            {/* {reviewArray.map((item, i) => {
                if (item.data.userEmail === userInformation.email) {
                    return <div key={i}>
                        <div><strong>{item.data.name}:</strong> {item.data.review}</div>
                    </div>
                }
            })} */}
            {reviewArray.map((item, i) => {
                console.log(item.data);
                if (item.data.userEmail === userInformation.email) {
                return (
                <div key={i} className="UserReview">
                    <h4>{item.data.name}</h4>
                    <div className="boxes">
                        <div className="difficultyBox">
                            <div>Difficulty</div>
                            <div>{item.data.difficulty}/5</div>
                        </div>
                        <div className="funBox">
                            <div>Fun</div>
                            <div>{item.data.fun}/5</div>
                        </div>
                    </div>
                    <div>Tags: {item.data.tags}</div>
                    {/* <div>Tags: {Array.isArray(item.data.tags) ? item.data.tags : item.data.tags.map((tag, i) => <span key={i}>tag</span>)}</div> */}
                    {/* <div>Tags: {item.data.tags.length === 1 ? item.data.tags : item.data.tags.join(", ")}</div> */}
                    <div>Watch out for: {item.data.watchout}</div>
                    <div>{item.data.review}</div>
                </div>
            )}})}
    </div>
}

export default UserProfileComponent;