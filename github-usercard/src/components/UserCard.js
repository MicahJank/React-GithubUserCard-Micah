import React from 'react';


const UserCard = ( { user } ) => {

    return (
        <div>
            <img src={user.avatar_url} alt='current user profile' />
            <h3>{user.name}</h3>
            <p>{user.bio}</p>
            <h4>Currently followed by {user.followers} people</h4>
            <h4>Currently following {user.following} people</h4>
        </div>
    );
}

export default UserCard;