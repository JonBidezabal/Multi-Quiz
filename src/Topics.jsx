import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { useData } from "./DataContext";

const Topics = ({setStart, start}) => {
  
    const {quiz, setQuiz} = useData()
    const [url, setUrl] = useState(null)
    
    const fetch = useFetch(url)

    useEffect(() => {
        if (fetch) {
          setQuiz(fetch.results);
          console.log(quiz);
          if(quiz){setStart(true)}
        }
      }, [fetch, quiz, start]);
      
      
const handleSelectTopic = async (e) => {
    e.preventDefault()
    const selectedTopic = e.target.textContent;
    const topicUrl = getTopicUrl(selectedTopic);
    console.log(topicUrl);
    setUrl(topicUrl);

}
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
    <ul>
    <li onClick={handleSelectTopic}>General Knowledge</li>
    <li onClick={handleSelectTopic}>Films</li>
    <li onClick={handleSelectTopic}>Science & nature</li>
    </ul>
  );
};

export default Topics;