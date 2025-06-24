"use client";
import React from "react";
import { Button, InputForm, PaperWrapper } from "@/shared/ui";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { AddProjectSchema } from "@/shared/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProject } from "../hooks";

export const AddProjectForm: React.FC = () => {
  const { createProjectTrigger } = useCreateProject();

  const form = useForm({
    resolver: zodResolver(AddProjectSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: any) => {
    try {
      const response = await createProjectTrigger(data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <PaperWrapper>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box
              sx={{
                display: "grid",
                // gridTemplateColumns: "1fr 1fr",
                gap: 1.4,
              }}
            >
              <InputForm size="small" name="email" label="Название проекта" />
              <InputForm
                size="small"
                name="description"
                label="Описание проекта"
              />

              <Button variant="contained" type="submit">
                Создать
              </Button>
            </Box>
          </form>
        </FormProvider>
      </PaperWrapper>
    </div>
  );
};
