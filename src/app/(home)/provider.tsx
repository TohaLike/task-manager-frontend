"use client";
import React from "react";
import { usePofile } from "@/shared/hooks";
import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import Link from "next/link";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const { profileData, profileLoading } = usePofile();

  if (profileLoading) {
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#f5f7fa",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              px: 6,
              py: 5,
              borderRadius: 4,
              textAlign: "center",
              maxWidth: 400,
              width: "100%",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Вы не авторизованы
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
              Пожалуйста, войдите в систему, чтобы продолжить.
            </Typography>
            <Button
              component={Link}
              href={"/auth/login"}
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Войти
            </Button>
          </Paper>
        </Box>
      </div>
    );
  }

  return <div>{children}</div>;
};
