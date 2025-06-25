"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Paper,
} from "@mui/material";

export const Main: React.FC = () => {
  return (
    <>
      <div>
        {/* Хедер */}
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              TaskManager
            </Typography>
            <Button href="/auth/login" color="primary">
              Войти
            </Button>
            <Button href="/auth/registration" variant="outlined" sx={{ ml: 2 }}>
              Регистрация
            </Button>
          </Toolbar>
        </AppBar>

        {/* Главный блок */}
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            py: 10,
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
              Управляй задачами — просто и эффективно
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Планируй, организуй и контролируй свои проекты в одном месте
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/auth/registration"
              sx={{ mt: 4 }}
            >
              Начать бесплатно
            </Button>
          </Container>
        </Box>

        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {[
              {
                title: "Задачи и проекты",
                text: "Создавай задачи, группируй по проектам, отслеживай статус выполнения.",
              },
              {
                title: "Рабочие области",
                text: "Разделяй проекты по рабочим контекстам — для команды, фриланса или личных дел.",
              },
              {
                title: "Интуитивный интерфейс",
                text: "Чистый дизайн и простота использования — ничего лишнего.",
              },
            ].map((feature, index) => (
              <Box key={index}>
                <Paper sx={{ p: 4, height: "100%" }} elevation={3}>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.text}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Grid>
        </Container>

        {/* Подвал */}
        <Box sx={{ bgcolor: "#eee", py: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} TaskManager — Все права защищены
          </Typography>
        </Box>
      </div>
    </>
  );
};
