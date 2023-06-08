import { useState, useEffect } from "react";
import { Typography, Button, Container, CircularProgress, Grid } from "@mui/material";
import useFetch from "./hooks/useFetch";
import { useData } from "./DataContext";

const Topics = ({ setStart, start }) => {
  const { quiz, setQuiz } = useData();
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetch = useFetch(url);

  useEffect(() => {
    if (fetch) {
      setQuiz(fetch.results);
      console.log(quiz);
      if (quiz) {
        setStart(true);
      }
    }
  }, [fetch, quiz, setStart]);

  const handleSelectTopic = async (e) => {
    e.preventDefault();
    const selectedTopic = e.target.textContent;
    const topicUrl = getTopicUrl(selectedTopic);
    console.log(topicUrl);
    setUrl(topicUrl);
    setLoading(true);
  };

  const getTopicUrl = (topic) => {
    if (topic === "General Knowledge") {
      return "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple";
    } else if (topic === "Films") {
      return "https://opentdb.com/api.php?amount=50&category=11&type=multiple";
    } else if (topic === "Science & nature") {
      return "https://opentdb.com/api.php?amount=50&category=17&type=multiple";
    }
  };

  return (
    <Container>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h5" align="center">Select a topic</Typography>
        </Grid>
        <Grid item>
          {loading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" onClick={handleSelectTopic}>
                  General Knowledge
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleSelectTopic}>
                  Films
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleSelectTopic}>
                  Science & nature
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Topics;