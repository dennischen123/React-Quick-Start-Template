import React, {createContext, useReducer} from 'react';
import { sampleReducer } from '../reducers/sampleReducer';

export const SampleContext = createContext();

// import SampleContext and wrap it around component consuming Context
const SampleContextProvider = (props) => {
    const [samples, dispatch] = useReducer(sampleReducer, [{name: 'Content', id: 1}]);

    return(
        <SampleContext.Provider value={{samples, dispatch}}>
            {props.children}
        </SampleContext.Provider>
    )
}

export default SampleContextProvider;