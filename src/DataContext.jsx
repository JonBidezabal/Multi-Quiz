import React, { useState } from "react"
import { useContext } from "react"

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [quiz, setQuiz] = useState(null);


  return (
    <DataContext.Provider value={{ quiz, setQuiz }}>
      {children}
    </DataContext.Provider>
  );    

};

export const useData = () => useContext(DataContext)