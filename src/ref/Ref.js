import { useState, useRef, useEffect } from "react";

export default function Ref() {
  const inputRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  function handleClick() {
    inputRef.current.focus();
  }
  let ref2 = useRef(0);

  function handleClickP() {
    ++ref2.current;
    alert(ref2.current);
  }

  console.log(inputRef.current)
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
      {/* another Example */}
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <button onClick={handleClickP}>Click me!</button>
    </>
  );
}

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}
