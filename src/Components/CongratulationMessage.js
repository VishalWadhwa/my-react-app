import React, {useEffect} from 'react';

export const CongratulationMessage = ({numOfClicks, thersholdClicks, onHide}) => {
    useEffect(()=> {
        return () => console.log("unmounted");
    },[]);
    return numOfClicks >= thersholdClicks 
        ?<>
            <h1>
                Congratulations you have reached {thersholdClicks} clicks!
            </h1> 
            <button onClick = {onHide}> Hide! </button>
        </>
        : null;
}