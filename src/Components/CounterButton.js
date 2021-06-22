import React, {useEffect} from 'react';

export const CounterButton = ({onIncrement, numOfClicks}) => {
    useEffect(() => {
        console.log ("Use Effect called");
    }, [])
    
    return (
        <>
            <p>
                You have clicked the button {numOfClicks} times.
            </p>
            <button onClick = {onIncrement}>Click Me!</button>
        </>
    );
}