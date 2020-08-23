import React from 'react';

//alternative to person = function () {
// }

const person = (props) => {
    return (
        <div>
         <p onClick ={props.click}>I'm a {props.name} and I am {props.age} !</p>
         <p>{props.children}</p>
         <input type="text" onChange=""/>
        </div>
    )
};


export default person;