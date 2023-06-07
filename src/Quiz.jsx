import { useData } from "./DataContext"
import QuizCard from "./QuizCard";
import useRandomObjects from "./hooks/useRandomObjects"
import useModifiedArrayObj from "./hooks/useChangeArray";

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

    const provisionalQuiz = useRandomObjects(quiz);
    const ultimateQuiz = useModifiedArrayObj(provisionalQuiz)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      };
    

  return (
    <>
    {ultimateQuiz && 
    <QuizCard
        object={ultimateQuiz[currentIndex]}
        handleNext={handleNext}
        setActive={setActive}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setStart={setStart}
        active={active}
        start={start}
        ultimateQuiz={ultimateQuiz}
        end={end} 
        setEnd={setEnd}
    />
      }  
    </>
  )
}

export default Quiz