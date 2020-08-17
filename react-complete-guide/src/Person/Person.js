import React from 'react';

//alternative to person = function () {
// }

const person = (props) => {
    return (
        <div>
         <p>I'm a {props.name} and I am {props.age} !</p>
         <p>{props.children}</p>
        </div>
    )
};


export default person;