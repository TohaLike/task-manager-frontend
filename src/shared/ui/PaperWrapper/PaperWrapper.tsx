"use client";
import React from "react";
import { Paper as MuiPaper, PaperProps } from "@mui/material";

export const PaperWrapper: React.FC<PaperProps> = ({ children, sx }) => {
  return (
    <div>
      <MuiPaper variant="outlined" sx={{ p: 2, ...sx }}>
        {children}
      </MuiPaper>
    </div>
  );
};
