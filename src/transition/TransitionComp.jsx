import {  useState } from "react";
import HeavyComponent from "../HeavyComponent";
import PostsTab from "../PostTab";

function ContactTab() {
  return (
    <>
      <p>You can find me online here:</p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </>
  );
}

function AboutTab() {
  return <p>Welcome to my profile!</p>;
}

export default function TransitionComp() {
  const [tab, setTab] = useState("about");
  return (
    <>
      {["about", "posts", "heavy", "contact"].map((item, i) => (
        <TabButton
          key={i}
          isActive={tab === item}
          handleClick={() => setTab(item)}
        >
          {item}
        </TabButton>
      ))}
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "heavy" && <HeavyComponent />}
      {tab === "contact" && <ContactTab />}
    </>
  );
}

function TabButton({ children, isActive, handleClick }) {
//   const [isPending, startTransition] = useTransition();
//   if (isPending) return <button>loading...</button>;
  if (isActive) return <b>{children}</b>;
  return (
    <button
    //   onClick={() => {
    //     startTransition(handleClick);
    //   }}
        onClick={handleClick}
    >
      {children}
    </button>
  );
}
