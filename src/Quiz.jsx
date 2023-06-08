import { useData } from "./DataContext"
import { useUser } from "./UserContext";
import { useEffect } from "react";
import QuizCard from "./QuizCard";
import useRandomObjects from "./hooks/useRandomObjects"
import useModifiedArrayObj from "./hooks/useChangeArray";
import Ranking from "./Ranking";
import { Button } from "@mui/material";

function Quiz(props) {
    
    const { 
            setActive,
            setStart, 
            active,
            start,
            currentIndex,
            setCurrentIndex,
            setEnd,
            end
          } = props

    const {quiz} = useData()
    const { setUser } = useUser();

    
    const provisionalQuiz = useRandomObjects(quiz);
    const ultimateQuiz = useModifiedArrayObj(provisionalQuiz)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      };
      
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
    <>
    {ultimateQuiz && 
    <QuizCard
        object={ultimateQuiz[currentIndex]}
        handleNext={handleNext}
        active={active}
        start={start}
    />
      }
      {end && !ultimateQuiz[currentIndex] && active && start && (
        <div>
          <Button variant="contained" onClick={handlePlayAgain}>
            Play again
          </Button>
          <Ranking currentIndex={currentIndex} ultimateQuiz={ultimateQuiz} />
        </div>
      )}  
    </>
  )
}

export default Quiz