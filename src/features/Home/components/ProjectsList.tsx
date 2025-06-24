"use client";
import React from "react";
import { useGetProject } from "../hooks";
import { InteractiveList } from "@/shared/ui";

export const ProjectsList: React.FC = () => {
  const { getProjectData } = useGetProject();

  return (
    <div>
      <InteractiveList />
    </div>
  );
};
