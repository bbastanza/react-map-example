import React from "react";

function PersonRow(props) {
    return (
        <tr>
            <td>{props.somethingWeird.firstName}</td>
            <td>{props.somethingWeird.lastName}</td>
            <td>{props.somethingWeird.age}</td>
        </tr>
    );
}

export default PersonRow;
