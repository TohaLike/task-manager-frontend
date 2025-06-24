"use client";
import React from "react";
import { ButtonProps, Button as MuiButton } from "@mui/material";

export const Button: React.FC<ButtonProps> = ({
  variant,
  type,
  children,
  onClick,
  startIcon,
  sx
}) => {
  return (
    <>
      <MuiButton
        variant={variant}
        type={type}
        onClick={onClick}
        startIcon={startIcon}
        sx={{ ...sx }}
      >
        {children}
      </MuiButton>
    </>
  );
};
