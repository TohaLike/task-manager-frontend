"use client";
import React from "react";
import { AddProjectForm } from "./AddProjectForm";
import { ProjectsList } from "@/shared/ui";

export const Home: React.FC = () => {
  return (
    <div>
      <AddProjectForm />
      <ProjectsList />
    </div>
  );
};
