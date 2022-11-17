import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Home = () => {
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    window.location.href = `/summoner/${name}`;
  };

  return (
    <Box sx={{ width: 1 }}>
      <Box
        display="grid"
        gridTemplateColumns="0.5fr"
        gap={2}
        sx={{ justifyContent: "center", justifyItems: "center", marginTop: 4 }}
      >
        <Box>
          <h1>Player Stats</h1>
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            label="Player name"
            variant="outlined"
            onChange={handleChangeName}
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={() => handleClick()}>
            Get stats!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
