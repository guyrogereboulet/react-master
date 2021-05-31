import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setUser(response.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <ErrorComponent />;
  }
  return (
    <article className="card d-flex align-items-center p5 shadow mt-5">
      <img
        className="rounded-circle my-4"
        src={user.avatar_url}
        alt={user.name}
        style={{ width: "80px", height: "80px" }}
      />

      <h3>{user.login}</h3>
    </article>
  );
};

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

const ErrorComponent = () => {
  return (
    <div>
      <h2>There is an Error</h2>
    </div>
  );
};

export default ConditionalCompining;
