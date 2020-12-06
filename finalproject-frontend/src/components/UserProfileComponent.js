import React from 'react';

// take in userInformation from UserProfile.js
// display userInformation
function UserProfileComponent({userInformation}) {
    return <div>
        <p>
            <strong>Email:</strong> {userInformation.email}
        </p>
        <p>
            <strong>Reviews:</strong>
            {/* {userReviews.map((item, i) => (
            <div key={i}>
                <p>{item.name}: {item.review}</p>
            </div>
        ))} */}
        </p>
    </div>
}

export default UserProfileComponent;