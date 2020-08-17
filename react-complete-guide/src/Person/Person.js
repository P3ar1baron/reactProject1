import React from 'react';

//alternative to person = function () {
// }

const person = (props) => {
    return <p>I'm a {props.name} and I am {props.age} !</p>
};



export default person;