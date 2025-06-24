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
    },
  });

  const { handleSubmit, setValue } = form;

  const onSubmit = async (data: any) => {
    try {
      const response = await createProjectTrigger(data);
      setValue("title", "");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <PaperWrapper sx={{ borderRadius: 4 }}>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box
              sx={{
                display: "grid",
                // gridTemplateColumns: "1fr 1fr",
                gap: 1.4,
              }}
            >
              <InputForm size="small" name="title" label="Название проекта" />

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
