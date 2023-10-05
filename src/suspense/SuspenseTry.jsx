import axios from "axios";
import React, { Suspense, lazy, useState } from "react";
import useSWR from "swr";
const HeavyComponent = lazy(() => import("../HeavyComponent"));
// import HeavyComponent from "../HeavyComponent";
const link = "https://jsonplaceholder.typicode.com/todos";
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function SuspenseTry() {
  return (
    <div>
      <div>SuspenseTry</div>
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <List />
        <HeavyComponent />
      </Suspense>
      <progress value={null} />
      <progress value={0.7} />
    </div>
  );
}

function List() {
  const [fetchData, setFetchData] = useState(false);
  const { data: first } = useSWR(fetchData ? link : null, fetcher, {
    suspense: true,
  });

  return (
    <>
      <button onClick={() => setFetchData(true)}>Fetch Data</button>
      <ul>
        {first?.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
