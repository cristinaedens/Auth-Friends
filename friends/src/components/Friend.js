import React from "react";

export const Friend = props => {
  return(
    <>
    <h2>Name: {props.data.name}</h2>
    <p class="age">Age: {props.data.age}</p>
  <p class="email">Email: {props.data.email}</p>
    </>
  );
}

