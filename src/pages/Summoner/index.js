import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getRecentMatchesData } from "../../services/matches";
import { Match } from "../../components/Match";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Summoner = () => {
  const { player } = useParams();
  const [matches, setMatches] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (player) {
      try {
        getRecentMatchesData(player).then((response) => {
          setMatches(response.data);
          setIsLoading(false);
        });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  }, [player]);

  return (
    <Box sx={{ width: 1 }}>
      <Box
        display="grid"
        sx={{
          justifyContent: "center",
          justifyItems: "center",
          marginTop: 4,
        }}
      >
        {isLoading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <h1>{player.toUpperCase()}'S STATS</h1>
            {matches.map((match) => (
              <Match matchData={match} key={match.gameEndTimestamp} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Summoner;
