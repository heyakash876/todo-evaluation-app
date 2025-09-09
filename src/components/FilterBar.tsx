import {  TextField, Paper, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { useFilterContext } from "../contexts/FilterContext";

export const FilterBar = () => {
  const { dateFilter, setDateFilter } = useFilterContext();
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");

  const handleFilterChange = (event: React.MouseEvent<HTMLElement>, newFilter: string) => {
    if (newFilter !== null) {
      setFilter(newFilter);
      if (newFilter === "All") setDateFilter({ type: "all" });
      else if (newFilter === "Today") setDateFilter({ type: "today" });
      else if (newFilter === "This Week") setDateFilter({ type: "thisWeek" });
      
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 3,
        p: 2,
        mb: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        background: "inherit",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilterChange}
          size="small"
          sx={{ mr: 2 }}
        >
          <ToggleButton value="All">All</ToggleButton>
          <ToggleButton value="Today">Today</ToggleButton>
          <ToggleButton value="This Week">This Week</ToggleButton>
          <ToggleButton value="Custom">Custom</ToggleButton>
        </ToggleButtonGroup>

        {filter === "Custom" && (
          <TextField
            type="date"
            label="Start Date"
            size="small"
            sx={{ mr: 1 }}
            value={start}
            onChange={(e) => {
              setStart(e.target.value);
              setDateFilter({
                type: "range",
                startDate: e.target.value ? new Date(e.target.value) : null,
                endDate: dateFilter.endDate ?? null,
              });
            }}
            InputLabelProps={{ shrink: true }}
          />
        )}
        {filter === "Custom" && (
          <TextField
            type="date"
            label="End Date"
            size="small"
            value={end}
            onChange={(e) => {
              setEnd(e.target.value);
              setDateFilter({
                type: "range",
                startDate: dateFilter.startDate ?? null,
                endDate: e.target.value ? new Date(e.target.value) : null,
              });
            }}
            InputLabelProps={{ shrink: true }}
          />
        )}
      </Box>
    </Paper>
  );
};

export default FilterBar;