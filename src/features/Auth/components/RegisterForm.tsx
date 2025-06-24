"use client";
import React from "react";
import { InputForm, Button, PaperWrapper } from "@/shared/ui";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../hooks";
import Link from "next/link";
import { AuthSchema } from "@/shared/validations";

export const RegistrationForm: React.FC = () => {
  const { registerTrigger } = useRegister();

  const form = useForm({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: any) => {
    try {
      const response = await registerTrigger(data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -70%)",
          maxWidth: "600px",
          width: "100%",
          m: "auto",
        }}
      >
        <PaperWrapper
          sx={{
            borderRadius: 6,
            p: 4,
            width: "100%",
            maxWidth: 660,
            boxShadow: 3,
          }}
        >
          <FormProvider {...form}>
            <Typography variant="h4" textAlign="center" fontWeight={600} mb={3}>
              Регистрация{" "}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Box sx={{ mt: 3, display: "grid", gap: 2 }}>
                <InputForm name="email" label="Электронная почта" />
                <InputForm name="password" label="Пароль" />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Создать аккаунт
                </Button>
                <Typography variant="body2" textAlign="center" mt={2}>
                  Уже есть аккаунт?{" "}
                  <Typography
                    component={Link}
                    href="/auth/login"
                    sx={{
                      color: "primary.main",
                      fontWeight: 500,
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Войти
                  </Typography>
                </Typography>
              </Box>
            </form>
          </FormProvider>
        </PaperWrapper>
      </Box>
    </div>
  );
};
