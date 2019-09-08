import React from 'react';

import { makeStyles, MenuItem, TextField, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 340,
    },
    searchBox: {
        marginBottom: 30,
        marginTop: 10,
    }
}))

const SearchForm = ( { handleChange, searchInput } ) => {

    const classes = useStyles();

    return (
        <Box className={classes.searchBox} display='flex' justifyContent='center'>
            <TextField value={searchInput} onChange={handleChange} id='standard-search' label='Search a User' type='text' margin='normal' className={classes.textField} />
        </Box>
    )
}

export default SearchForm;