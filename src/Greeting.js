import React from 'react';

function Greeting(props) {
    console.log(props);
    let isMorning = (new Date()).getHours() < 12;
    let greetingMessage = isMorning 
    ? (
        <>
            <h3>Guten Morgen! {props.name}</h3>
            <p>
                Here to stay.
            </p>
        </>
    )
    : (
        <div>
            <h3>Guten Tag! {props.name}</h3>
            <p>
                There are many new ways for wrapping more then {props.numOfMessages} elements.
            </p>
        </div>
    );
    return greetingMessage;
}

export default Greeting;