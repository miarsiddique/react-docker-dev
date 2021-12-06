import React from "react";

const User = (props) => {
    return (
        <div>
            <h1>User Components</h1>
            <div>{props.data.name}</div>
            <div>{props.data.Age}</div>
        </div>
    )
}

export default User;