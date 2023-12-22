/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";

import "./App.css";
import { useEffect, useState } from "react";
import UserTab from "./components/UserTab/UserTab";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [userData, setUserData] = useState("");
  const [userRepos, setUserRepos] = useState("");
  const [userSearch, setUserSearch] = useState("");

  const getUserData = async () => {
    const BASE_URL = "http://api.github.com/users";
    const userName = userSearch ? userSearch : "ElenaKorenieva";
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;

    try {
      const response = await axios.get(
        `${BASE_URL}/${userName}?client_id=${client_id}&client_secret=${client_secret}&sort=created`
      );
      const data = response.data;
      setUserData(data);
      const reposResponse = await axios.get(userData.repos_url);
      const userReposData = reposResponse.data;
      setUserRepos(userReposData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, [userSearch]);

  const getUserRepo = async () => {
    try {
      const reposResponse = await axios.get(userData.repos_url);
      setUserRepos(reposResponse.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserRepo();
  }, [userData]);

  const handleSubmit = (e) => {
    setUserSearch(e);
  };
  return (
    <div className="App">
      <UserInput handleSubmit={handleSubmit} />
      <UserTab userData={userData} userRepos={userRepos} />
    </div>
  );
}

export default App;
