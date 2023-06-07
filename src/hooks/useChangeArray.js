import { useState, useEffect } from "react";

const useModifiedArrayObj = (array) => {
  
    const [modification, setModification] = useState([]);

    useEffect(() => {
        if (array) {
          const newArray = array.map((obj) => {
            const answers = [...obj.incorrect_answers, obj.correct_answer];
            shuffle(answers);
            return { ...obj, answers };
          });
    
          setModification(newArray);
        }
      }, [array]);

      const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      };
    
      return modification;
    };

  
  
  export default useModifiedArrayObj;