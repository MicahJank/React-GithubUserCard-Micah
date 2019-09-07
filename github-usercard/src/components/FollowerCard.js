import React from 'react';

import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 245,
    },
    media: {
        height: 140,
    },
});

const FollowerCard = ( { follower } ) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia component='img' image={follower.avatar_url} alt='current follower profile' title='current follower profile' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>{follower.name}</Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>{follower.bio}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='subtitle1' component='sub'>Followed by {follower.followers} people</Typography>
                    <Typography variant='subtitle1' component='sub'>Following {follower.following} people</Typography>
                </CardContent>
            </CardActionArea>         
        </Card>
    );
}

export default FollowerCard;