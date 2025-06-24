"use client";
import React from "react";
import { Button, InputForm, PaperWrapper } from "@/shared/ui";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { AddUserSchema } from "@/shared/validations";
import { zodResolver } from "@hookform/resolvers/zod";

export const AddUserForm: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(AddUserSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: any) => {
    try {
      // const response = await loginTrigger(data);
      // return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <PaperWrapper>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 1.4 }}>
              <InputForm size="small" name="email" label="Электронная почта" />

              <Button variant="contained" type="submit">
                Добавить
              </Button>
            </Box>
          </form>
        </FormProvider>
      </PaperWrapper>
    </div>
  );
};
