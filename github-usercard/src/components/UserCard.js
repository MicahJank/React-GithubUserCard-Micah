import React from 'react';

import {Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter,Button} from "shards-react";

const UserCard = ( { user } ) => {

    return (
        <Card small={true}>
            <CardHeader>{user.name}</CardHeader>
            <CardImg src={user.avatar_url} alt='current user profile' />
            <CardBody>
                <p>{user.bio}</p>
                <Button>Github &rarr;</Button>
            </CardBody>
            <CardFooter>
                <span>Followed by {user.followers} people</span>
                <span>Following {user.following} people</span>
            </CardFooter>           
            
        </Card>
    );
}

export default UserCard;