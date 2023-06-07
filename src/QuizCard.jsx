import { useUser } from "./UserContext";
import { useState, useEffect } from "react";
import Ranking from "./Ranking";

function QuizCard(props) {
  const { setUser } = useUser();
  const [showSolution, setShowSolution] = useState(false);
  const [timer, setTimer] = useState(10);
  const [end, setEnd] = useState(false);

  const {
    object,
    handleNext,
    setActive,
    currentIndex,
    setCurrentIndex,
    setStart,
    active,
    start,
    ultimateQuiz,
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

  const handlePlayAgain = () => {
    setUser({
      username: "",
      score: 0,
    });
    setCurrentIndex(0);
    setActive(false);
    setStart(false);
    setEnd(false);
  };

  useEffect(() => {
    if (ultimateQuiz && currentIndex === ultimateQuiz.length) {
      setEnd(true);
    }
  }, [ultimateQuiz, currentIndex]);

  return (
    <section>
      {object && active && start && (
        <div>
          <p>{timer}</p>
          <h2>{object.question}</h2>
          <ul>
            {object.answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => handleSelected(answer)}
                style={{
                  backgroundColor:
                    showSolution && answer === object.correct_answer
                      ? "green"
                      : null,
                }}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      )}
      {end && !object && active && start && (
        <div>
          <Ranking currentIndex={currentIndex} ultimateQuiz={ultimateQuiz} />
          <button onClick={handlePlayAgain}>Play again</button>
        </div>
      )}
    </section>
  );
}

export default QuizCard;
