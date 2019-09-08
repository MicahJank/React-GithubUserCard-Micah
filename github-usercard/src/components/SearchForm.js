import React from 'react';

import { makeStyles, MenuItem, TextField } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}))

const SearchForm = () => {

    const classes = useStyles();

    return (
        <TextField id='standard-search' label='Search field' type='search' margin='nomral' className={classes.textField} />
    )
}

export default SearchForm;