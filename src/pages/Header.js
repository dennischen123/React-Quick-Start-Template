import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },

}))
export default function Header(props) {

    const classes = useStyles();
    return(
        <>
            <h1 className={classes.root}>Header</h1>
        </>
    )
}