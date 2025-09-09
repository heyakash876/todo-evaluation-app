import { Button, ButtonGroup, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useFilterContext } from "../contexts/FilterContext";

export const FilterBar = () => {
  const { dateFilter, setDateFilter } = useFilterContext();
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  return (
    <Stack spacing={1} sx={{ mb: 2, alignItems: "center" }}>
      <ButtonGroup variant="outlined" size="small" sx={{ alignSelf: "center" }}>
        <Button onClick={() => setDateFilter({ type: "all" })} disabled={dateFilter.type === "all"}>
          All Tasks
        </Button>
        <Button
          onClick={() => setDateFilter({ type: "today" })}
          disabled={dateFilter.type === "today"}
        >
          Today
        </Button>
        <Button
          onClick={() => setDateFilter({ type: "thisWeek" })}
          disabled={dateFilter.type === "thisWeek"}
        >
          This Week
        </Button>
      </ButtonGroup>
      <Stack
        direction="row"
        gap={1}
        alignItems="center"
        sx={{ justifyContent: "center", width: "100%" }}
      >
        <TextField
          type="date"
          size="small"
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
            setDateFilter({
              type: "range",
              startDate: e.target.value ? new Date(e.target.value) : null,
              endDate: dateFilter.endDate ?? null,
            });
          }}
          label="Start"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="date"
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
          label="End"
          InputLabelProps={{ shrink: true }}
        />
      </Stack>
    </Stack>
  );
};

export default FilterBar;