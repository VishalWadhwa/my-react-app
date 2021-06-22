import React from 'react';

export const GreetingNew = ({name, numOfMessages}) => {
    if(!name) return null;
    let isMorning = (new Date()).getHours() < 12;
    let greetingMessage = isMorning 
    ? <h3>Guten Morgen! {name}</h3>
    : <h3>Guten Tag! {name}</h3>;
    return <> {greetingMessage} 
              {numOfMessages === 0 
              ? null
              :  <p>There are {numOfMessages} messages</p> }
           </>
}