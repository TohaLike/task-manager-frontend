"use client";
import React from "react";
import { InputForm, Button } from "@/shared/ui";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks";
import Link from "next/link";
import { AuthSchema } from "@/shared/validations";

export const LoginForm: React.FC = () => {
  const { loginTrigger } = useLogin();

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
      const response = await loginTrigger(data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box sx={{ mt: 5, display: "grid", gap: 1.4 }}>
            <InputForm name="email" label="Электронная почта" />
            <InputForm name="password" label="Пароль" />

            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>У вас нет аккаунта?</Typography>
              <Typography component={Link} href={"/auth/registration"}>
                Зарегистрироваться
              </Typography>
            </Box>

            <Button variant="contained" type="submit">
              Войти
            </Button>
          </Box>
        </form>
      </FormProvider>
    </div>
  );
};
