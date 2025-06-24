"use client";
import React from "react";
import { ProjectProps } from "../types";
import { TaskList } from "@/shared/ui";
import { ProjectHeader } from "./ProjectHeader";

export const Project: React.FC<ProjectProps> = ({ id }) => {

  return (
    <div>
      <ProjectHeader id={id} />
      <TaskList id={id} />
    </div>
  );
};
