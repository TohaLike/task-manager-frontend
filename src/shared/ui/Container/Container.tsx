"use client";
import React from "react";
import { Container as MuiContainer } from "@mui/material";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <MuiContainer
        maxWidth={false}
        sx={{ maxWidth: 1300, "&.MuiContainer-root": { p: 2 } }}
      >
        {children}
      </MuiContainer>
    </div>
  );
};


export const AuthContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <MuiContainer
        maxWidth={false}
        sx={{ maxWidth: 700, "&.MuiContainer-root": { p: 2 } }}
      >
        {children}
      </MuiContainer>
    </div>
  );
};
