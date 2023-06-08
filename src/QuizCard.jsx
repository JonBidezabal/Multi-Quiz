import { useUser } from "./UserContext";
import { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@mui/material";

function QuizCard(props) {
  const { setUser } = useUser();
  const [showSolution, setShowSolution] = useState(false);
  const [timer, setTimer] = useState(10);

  const {
    object,
    handleNext,
    active,
    start
  } = props;

  const handleSelected = (answer) => {
    setShowSolution(true);
    if (answer === object.correct_answer) {
      setUser((prevUser) => ({
        ...prevUser,
        score: prevUser.score + 1,
      }));
    }

    setTimeout(() => {
      setShowSolution(false);
      handleNext();
    }, 1000);
  };

  useEffect(() => {
    if (object != null) {
      setTimer(10);
      const interval = setInterval(() => {
        setTimer((number) => {
          if (number === 0) {
            clearInterval(interval);
            setShowSolution(true);
            setTimeout(() => {
              setShowSolution(false);
              handleNext();
              setTimer(10);
            }, 1000);
            return null;
          }
          return number - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [handleNext, object]);



  return (
    <div>
      {object && active && start && (
        <div>
          <Typography variant="h5" align="center" gutterBottom>
            {timer}
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            {object.question}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {object.answers.map((answer, index) => (
              <Grid item key={index}>
                <Button
                  variant="contained"
                  onClick={() => handleSelected(answer)}
                  style={{
                    backgroundColor:
                      showSolution && answer === object.correct_answer
                        ? "green"
                        : null,
                  }}
                >
                  {answer}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

export default QuizCard;