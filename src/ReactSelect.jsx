import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";

function ReactSelect() {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [allOptions, setAllOptions] = useState([]);
  //fetch all data
  useEffect(() => {
    try {
      const getUserApi = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setAllOptions(data);
        console.log(data);
      };
      getUserApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const filterOptions = (inputValue) => {
    return allOptions.filter((i) =>
      i.title.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const promiseOptions = (inputValue) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 500);
    });
  };

  return (
    <div className="App">
      <pre>Input Value: "{inputValue}"</pre>
      <AsyncSelect
        cacheOptions
        isMulti
        // defaultOptions

        value={selectedValue || ""}
        //it will show you the name of users in the dropdown

        getOptionLabel={(e) => e.title}
        getOptionValue={(e) => e.title}
        loadOptions={promiseOptions}
        // write exactly like this it need all event
        onInputChange={(e) => setValue(e)}
        onChange={(e) => setSelectedValue(e)}
        defaultOptions={allOptions}
        placeholder="Select username"
        noOptionsMessage={() => "there is not what you want"}
        loadingMessage={() => "just wait a second"}
        // if false for opening you must only click on chevron
        openMenuOnClick={false}
        // isDisabled={false}
      />
      {/*  <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre> */}
      {selectedValue?.map((item, i) => (
        <div key={i}>
          <h1>{item.body}</h1>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default ReactSelect;
