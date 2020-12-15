import React from 'react';
import UserProfileComponent from "../components/UserProfileComponent"

function UserProfile({userInformation}) {
    return <div><h2>Your Profile</h2>
        <UserProfileComponent userInformation={userInformation} />
    </div>
}

export default UserProfile;