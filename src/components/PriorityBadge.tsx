import React from "react";
import { TaskPriority } from "../types/user";
import { Box, Typography } from "@mui/material";

const PRIORITY_COLORS: Record<TaskPriority, string> = {
  Critical: "#d32f2f", // red
  High: "#f57c00",    // orange
  Medium: "#1976d2",  // blue
  Low: "#388e3c",     // green
};

const PRIORITY_BG_COLORS: Record<TaskPriority, string> = {
  Critical: "#ffebee", // light red
  High: "#fff3e0",    // light orange
  Medium: "#e3f2fd",  // light blue
  Low: "#e8f5e9",     // light green
};

export const PriorityBadge: React.FC<{ priority: TaskPriority; sx?: any }> = ({ priority, sx }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 0.5, // reduced gap
      px: 1.5,
      py: 0.5,
      borderRadius: 2,
      backgroundColor: PRIORITY_BG_COLORS[priority],
      width: "fit-content",
      ...sx,
    }}
  >
    <Box
      sx={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        bgcolor: PRIORITY_COLORS[priority],
        display: "inline-block",
        mr: 0.5, // reduced margin right
      }}
    />
    <Typography variant="body2" sx={{ fontWeight: 600, color: PRIORITY_COLORS[priority] }}>
      {priority}
    </Typography>
  </Box>
);

export default PriorityBadge;