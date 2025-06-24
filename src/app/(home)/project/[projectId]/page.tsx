import React from "react";
import { Project } from "@/features/Project/components";

export default async function page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  return (
    <div>
      <Project id={projectId} />
    </div>
  );
}
