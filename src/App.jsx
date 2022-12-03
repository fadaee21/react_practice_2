import React, { useState } from "react";
import axios from "axios";
import { miladi_be_shamsi } from "./utils";
import { ExcelExport } from "./ExcelExport";

const App = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  // const urlData2 =
  //   "https://api.pm.kaaryar.ir/ta/user/all?pageNum=1&pageSize=10";
  const urlData = "https://api.pm.kaaryar.ir/auth/login";
  const urlTestAll = "https://api.pm.kaaryar.ir/test/all";

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
            "content-type": "application/json",
          },
        }
      );
      setToken(response.data.authorization);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const userList = async () => {
    try {
      let headersList = {
        Authorization: token,
      };

      let reqOptions = {
        url: "https://api.pm.kaaryar.ir/teacher/user/all?pageNum=0&pageSize=10",
        method: "GET",
        headers: headersList,
      };

      let response = await axios.request(reqOptions);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTestAll = async () => {
    try {
      const response = await axios.get(urlTestAll);
      console.log(response);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const changeDate = () => {
    console.log(miladi_be_shamsi(2022, 9, 16));
  };

  return (
    <>
      <h1>usertestspring</h1>
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
        <button type="submit">get token</button>
      </form>
      <br />

      <button type="button" onClick={userList}>
        get user list
      </button>
      <br />
      <br />

      <ExcelExport fileName={"excel export"} apiData={data} />

      <br />
      <br />
      <button onClick={getTestAll}>get test all</button>
      <br />
      <br />
      <button onClick={changeDate}>date</button>
    </>
  );
};

export default App;
