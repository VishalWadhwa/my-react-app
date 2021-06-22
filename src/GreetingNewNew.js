import React from 'react';

export const GreetingNewNew = ({person}) => {
    console.log(person);
    let isMorning = (new Date()).getHours() < 12;
    let greetingMessage = isMorning 
    ? <h3>Guten Morgen! {person.name}</h3>
    : <h3>Guten Tag! {person.name}</h3>;
    return <> {greetingMessage} 
                <p>There are {person.numOfMessages} messages</p>
           </>
}