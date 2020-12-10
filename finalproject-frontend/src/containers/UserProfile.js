import React from 'react';
import UserProfileComponent from "../components/UserProfileComponent"

function UserProfile({userInformation, reviewArray}) {
    return <div><h2>Your Profile</h2>
    {/* just pass userInformation into UserProfileComponent */}
        <UserProfileComponent userInformation={userInformation} reviewArray={reviewArray}/>
    </div>
}

export default UserProfile;