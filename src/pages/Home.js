import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/styles';
import { SampleContext } from '../contexts/SampleContext';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },

}))

export default function Home(props) {
    const {samples, dispatch} = useContext(SampleContext);
    //dispatch use case: 
    // dispatch({type: ADD_SAMPLE, sample: {name: 'sample'}})
    const classes = useStyles();
    return(
        <h1 className={classes.root}>{samples[0].name}</h1>
    )
}