import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type Priority = "low" | "medium" | "high" | "critical";

export const PrioritySelect = ({
  value,
  onChange,
  label = "Priority",
  width,
}: {
  value?: Priority;
  onChange: (v: Priority | undefined) => void;
  label?: string;
  width?: string | number;
}) => {
  return (
    <FormControl size="small" fullWidth sx={{ mt: 1, width, mx: width ? "auto" : undefined }}>
      <InputLabel id="priority-label">{label}</InputLabel>
      <Select
        labelId="priority-label"
        label={label}
        value={value ?? ""}
        onChange={(e) => onChange((e.target.value || undefined) as Priority | undefined)}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
        <MenuItem value="critical">Critical</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PrioritySelect;