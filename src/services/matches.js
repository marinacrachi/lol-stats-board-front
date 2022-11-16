import axios from "axios";

export const getRecentMatchesData = async (summonerName) => {
  const response = axios.get(`http://localhost:3001/${summonerName}`);
  return response;
};
