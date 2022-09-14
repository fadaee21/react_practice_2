import React, { useState } from "react";
import axios from "axios";


const App = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");
  //  const urlData = "https://reqres.in/api/login";
  // const urlData = "https://jsonplaceholder.typicode.com/users/1";
  // const urlData2 =
  //   "https://api.pm.kaaryar.ir/ta/user/all?pageNum=1&pageSize=10";
  const urlData = "https://api.pm.kaaryar.ir/auth/login";
  // const urlData = "https://api.pm.kaaryar.ir/test/all";

  const getData = async () => {
    try {
      const response = await axios.post(
        urlData,
        {
          username: uname,
          password: pwd,
        },
        {
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
        }
      );
      setToken(response.data.message);
      setSuccess(true);
      console.log(response.data.message);

      // userList();
    } catch (error) {
      console.log(error);
    }
  };

  const userList = async () => {
    try {
      let headersList = {
        "Content-Type": "application/json",
        Authorization: token,
      };

      let reqOptions = {
        url: "https://api.pm.kaaryar.ir/ta/user/all?pageNum=1&pageSize=10",
        method: "GET",
        headers: headersList,
      };

      let response = await axios.request(reqOptions);
      console.log(response);
    } catch (error) {
      console.log("catch block");
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(uname, pwd);
    getData();
  };



  return (
    <>
      <h1>HELLO WORLD</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="username"
          onChange={(e) => setUname(e.target.value)}
          type="text"
        />
        <input
          name="password"
          placeholder="password"
          onChange={(e) => setPwd(e.target.value)}
          type="password"
        />
        <br />
        <button type="submit">LOGIN</button>
      </form>
      <br />
      <p>usertestspring</p>
      <button type="button" onClick={userList}>
        get user list
      </button>
    </>
  );
};

export default App;
