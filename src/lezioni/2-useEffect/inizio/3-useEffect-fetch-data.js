import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    console.log("response", response);
    setUsers(response.data);
    // axios
    //   .get(url)
    //   .then((response) => console.log(response.data))
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Fetch Component</h1>
      <ul className="users">
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id} className="shadow">
              <img src={img} />
              <div key={id}>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchComponent;
