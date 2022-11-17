import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getRecentMatchesData } from "../../services/matches";

import Box from "@mui/material/Box";

const Matches = () => {
  const { player } = useParams();
  const [playerData, setPlayerData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (player) {
      try {
        getRecentMatchesData(player).then((response) => {
          setPlayerData(response.data);
          setIsLoading(false);
        });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  }, [player]);

  console.log("playerData");
  console.log(playerData);

  return (
    <Box sx={{ width: 1 }}>
      {isLoading ? (
        <Box>Loading</Box>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="0.5fr"
          gap={2}
          sx={{
            justifyContent: "center",
            justifyItems: "center",
            marginTop: 4,
          }}
        >
          Game Data
        </Box>
      )}
    </Box>
  );
};

export default Matches;
