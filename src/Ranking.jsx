import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { useData } from "./DataContext";
import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

function Ranking({ currentIndex, ultimateQuiz }) {
  const { quiz } = useData();
  const { user } = useUser();
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    if (currentIndex >= ultimateQuiz.length - 1) {
      let currentPlayer = { ...user };
      const arrayPlayers = JSON.parse(localStorage.getItem("players")) || [];
      const players = [...arrayPlayers, currentPlayer];
      let savePlayers = localStorage.setItem("players", JSON.stringify(players));
      setRanking(arrayPlayers);
    }
  }, [currentIndex, user, ultimateQuiz]);

  if (ranking.length === 0) {
    return null;
  }

  return (
    <Paper elevation={3} style={{ margin: "20px", padding: "10px" }}>
      <Typography variant="h6" align="center" gutterBottom>
        Ranking
      </Typography>
      <List>
        {ranking.length !== 0 &&
          ranking.map((player, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${player.username}, you got ${player.score} points`}
              />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}

export default Ranking;