import React from "react";
import { useData } from "../context/DataProvider";

const Teams = () => {
  const { selectedTeam, handleTeamSelectionChange } = useData();

  return (
    <select
      className="form-select form-select-lg"
      value={selectedTeam}
      onChange={handleTeamSelectionChange}
    >
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
};

export default Teams;
