import React from "react";

const User = ({ user, onHideDetail }) => {
  return (
    <tr>
      <td colSpan="4">
        <h2>User Detail</h2>
        <p>Name: {user.name}</p>
        <p>UserName: {user.username}</p>
        <p>Email:{user.email}</p>
        <p>
          Address: {user.address.street}
          &nbsp; {user.address.suite}&nbsp;
          {user.address.city},{user.address.zipcode}&nbsp;.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/* {user.address.geo.lat}, &nbsp;{user.address.geo.lng} */}
        </p>
        <p>Phone No: {user.phone}</p>
        <p>
          Website:{" "}
          <a
            href={
              // "https://hildegard.org/"
              `https://${user.website}`
            }
          >
            {user.website}
          </a>
        </p>
        <p>
          Company Details : <br />
          &nbsp;&nbsp; Company Name:&nbsp;&nbsp;
          {user.company.name}&nbsp;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {user.company.catchPhrase}&nbsp;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {user.company.bs}
        </p>

        {/* <button onClick={onHideDetail}>Hide Details</button> */}
      </td>{" "}
    </tr>
  );
};

export default User;
