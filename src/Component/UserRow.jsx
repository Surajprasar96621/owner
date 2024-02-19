import React from "react";

const UserRow = ({ name, gender, role, maritalStatus }) => {
    return (
      <tr>
        <td>1</td>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{role}</td>
        <td>{maritalStatus}</td>
      </tr>
    );
  };
export { UserRow };
