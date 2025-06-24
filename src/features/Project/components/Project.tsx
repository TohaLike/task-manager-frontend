"use client";
import React from "react";
import { ProjectProps } from "../types";
import { useGetProject } from "../hooks";
import { Typography } from "@mui/material";
import { AddTaskForm } from "./AddTaskForm";
import { TaskList } from "@/shared/ui";

export const Project: React.FC<ProjectProps> = ({ id }) => {
  const { getProjectData } = useGetProject(id);

  console.log(getProjectData);

  return (
    <div>
      <Typography>{getProjectData?.title}</Typography>
      <Typography>{getProjectData?.createdAt}</Typography>

      <AddTaskForm id={id} />
      <TaskList id={id} />
    </div>
  );
};
