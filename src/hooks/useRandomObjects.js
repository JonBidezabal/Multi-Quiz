import { useState, useEffect } from "react";


const useRandomObjects = (array) => {
    const [randomObjects, setRandomObjects] = useState([]);
  
    useEffect(() => {
        if (array) {
          const usedIndexes = new Set();
          const newArrayObjects = [];
    
          while (newArrayObjects.length < 10) {
            const randomIndex = Math.floor(Math.random() * array.length);
            if (!usedIndexes.has(randomIndex)) {
              newArrayObjects.push(array[randomIndex]);
              usedIndexes.add(randomIndex);
            }
          }
    
          setRandomObjects(newArrayObjects);
        }
      }, [array]);

    return  randomObjects ;
  };
  
  export default useRandomObjects;