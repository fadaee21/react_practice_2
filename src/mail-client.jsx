import { useState } from "react";
import { letters } from "./data2";

export default function MailClient() {
  const [selectedId, setSelectedId] = useState(new Set());
  // TODO: allow multiple selection
  const selectedCount = selectedId.size;
  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    //Keep in mind that you should not mutate objects in state,
    //and that includes Sets, too. This is why creates a copy 
    //of the Set first, and then updates that copy.
    const nextId = new Set(selectedId);
    if (nextId.has(toggledId)) {
      const tt = nextId.delete(toggledId);
      setSelectedId(tt);
    } else {
      nextId.add(toggledId);
    }
    setSelectedId(nextId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <li key={letter.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedId.has(letter.id)}
                onChange={() => {
                  handleToggle(letter.id);
                }}
              />
              {letter.subject}
            </label>
          </li>
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
