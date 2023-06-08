import { useState } from "react";
import { useUser } from "./UserContext";
import { Typography, TextField, Button, Container } from "@mui/material";

function Login({ setActive }) {
  const { setUser } = useUser();
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleStart = (e) => {
    e.preventDefault();
    setUser({ username: inputText, score: 0 });
    setActive(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Multi-Quiz
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Welcome to MultiQuiz! It's a small trivia game where you can choose from
        various topics. There are 10 questions in total, and you have 10 seconds
        to answer each question. Please enter your name and click "Start" to begin.
        Select a topic and let's start playing... Enjoy!
      </Typography>
      <form onSubmit={handleStart}>
        <TextField
          label="Enter your name"
          variant="outlined"
          value={inputText}
          onChange={handleInput}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Start
        </Button>
      </form>
    </Container>
  );
}

export default Login;