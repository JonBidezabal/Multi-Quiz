import { useState } from "react";
import { useUser } from "./UserContext";

function Login({setActive}) {
  const { setUser }= useUser();
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleStart = (e) => {
    e.preventDefault();
    setUser({ username: inputText, score: 0 });
    setActive(true)
  };

  return (
    <>
      <form>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleStart}>Start</button>
      </form>
    </>
  );
}

export default Login;