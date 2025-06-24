"use client";
import React from "react";
import { Button, InputForm, PaperWrapper } from "@/shared/ui";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { AddTaskSchema } from "@/shared/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTask } from "../hooks";
import { TasksProps } from "@/shared/types";

export const AddTaskForm: React.FC<TasksProps> = ({ id }) => {
  const { createTaskTrigger } = useCreateTask();

  const form = useForm({
    resolver: zodResolver(AddTaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { handleSubmit, setValue } = form;

  const onSubmit = async (data: any) => {
    try {
      const response = await createTaskTrigger({
        projectId: id,
        title: data.title,
        description: data.description,
      });
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
              <InputForm size="small" name="title" label="Название задачи" />
              <InputForm
                size="small"
                name="description"
                label="Описание задачи"
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
