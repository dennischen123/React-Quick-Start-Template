import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#131A22",
        fontSize: "20px",
        color: "white",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%"
    },

}))
export default function Footer(props) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            {props.children}
        </div>
    )
}