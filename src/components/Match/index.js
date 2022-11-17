import React from "react";
import { formatDistance } from "date-fns";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Match = ({ matchData }) => {
  const {
    gameDuration,
    win,
    championName,
    gameEndTimestamp,
    kills,
    deaths,
    assists,
    champLevel,
    creepScore,
    perks,
    spell1Casts,
    spell2Casts,
    spell3Casts,
    spell4Casts,
    creepRatio,
  } = matchData;

  const { defense, flex, offense } = perks.statPerks;

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr"
      gap={2}
      sx={{
        justifyContent: "center",
        justifyItems: "center",
        marginTop: 4,
      }}
    >
      <Accordion
        sx={{ width: 1, backgroundColor: "#d7dbe2" }}
        className="accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={`${gameEndTimestamp}-header`}
        >
          <Typography>
            {championName} ({champLevel}) -{" "}
            <Box
              component="span"
              m="{1}"
              sx={{ color: win ? "green" : "red", fontWeight: "bold" }}
            >
              {win ? "Victory" : "Defeat"}
            </Box>{" "}
            -{" "}
            {formatDistance(gameEndTimestamp, new Date(), { addSuffix: true })}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            K/DA: {kills} / {deaths} / {assists}
          </Box>
          <Box>
            CS: {creepScore} ({creepRatio})
          </Box>
          <Box>Game duration: {gameDuration} minutes</Box>
          <Box>
            Perk stats: <br />
            Defense: {defense} <br />
            Flex: {flex} <br />
            Offense: {offense}
          </Box>
          <Box>
            Spells: <br />
            {spell1Casts} <br />
            {spell2Casts} <br />
            {spell3Casts} <br />
            {spell4Casts}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
