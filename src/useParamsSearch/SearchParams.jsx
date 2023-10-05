import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchParams() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [firstName, setFirstName] = useState(searchParams.get("firstName") || "");
  const [family, setFamily] = useState(searchParams.get("family") || "");
  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams({ firstName, family });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          onChange={(e) => setFamily(e.target.value)}
          value={family}
        />
        <br />
        <button type="submit">click</button>
      </form>
    </div>
  );
}
