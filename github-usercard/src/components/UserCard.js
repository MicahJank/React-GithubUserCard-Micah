import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const UserCard = ( { user } ) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia component='img' image={user.avatar_url} alt='current user profile' title='current user profile' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>{user.name}</Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>{user.bio}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='subtitle1' component='sub'>Followed by {user.followers} people</Typography>
                    <Typography variant='subtitle1' component='sub'>Following {user.following} people</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>Github &rarr;</Button>
            </CardActions>          
        </Card>
    );
}

export default UserCard;