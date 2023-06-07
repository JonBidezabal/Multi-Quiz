import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { useData } from "./DataContext";

function Ranking({currentIndex, ultimateQuiz}) {

    const {quiz} = useData()
    const {user} = useUser()
    const [ranking, setRanking] = useState([])
    
  useEffect(()=>{
    if (currentIndex >= ultimateQuiz.length - 1) {
        let currentPlayer = {...user}
        const arrayPlayers = JSON.parse(localStorage.getItem("players")) || [];
        const players = [...arrayPlayers, currentPlayer];
        let savePlayers = localStorage.setItem("players", JSON.stringify(players));
        setRanking(arrayPlayers)
    }
  },[currentIndex, user, ultimateQuiz])

  if (ranking.length === 0) {
    return null; 
  }
   
  return (
        
      <ul>
        {ranking.length !== 0 && ranking.map((player, index)=>(
            <li key={index}>
                <p>{player.username} you got {player.score} in </p>
            </li>
        ))}
      </ul>
    )
  }
  
  export default Ranking