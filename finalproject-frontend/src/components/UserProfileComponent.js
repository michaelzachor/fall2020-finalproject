import React from 'react';

// take in userInformation from UserProfile.js
// display userInformation
function UserProfileComponent({userInformation, reviewArray}) {
    console.log(reviewArray);
    return <div>
        <p>
            <strong>Email:</strong> {userInformation.email}
        </p>
        <p>
            <div />
            <strong>Reviews:</strong>
            {reviewArray.map((item, i) => {
                if (item.data.userEmail === userInformation.email) {
                    return <div key={i}>
                        <div><strong>{item.data.trail}:</strong> {item.data.review}</div>
                    </div>
                }
            })}
        </p>
    </div>
}

export default UserProfileComponent;