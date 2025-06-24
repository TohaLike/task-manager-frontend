"use client";
import React from "react";
import { ProjectProps } from "../types";
import { useDeleteProject, useGetProject } from "../hooks";
import { Box, Typography } from "@mui/material";
import { Button, PaperWrapper } from "@/shared/ui";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatToDate } from "@/shared/helpers";

export const ProjectHeader: React.FC<ProjectProps> = ({ id }) => {
  const { getProjectData } = useGetProject(id);
  const { deleteProjectTrigger } = useDeleteProject(id);

  const handleDelete = async () => {
    try {
      const response = await deleteProjectTrigger({ id });
      return response;
    } catch (e) {
      throw e;
    }
  };

  return (
    <div>
      <PaperWrapper
        sx={{
          borderRadius: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontSize: 32, fontWeight: 600 }}>
            {getProjectData?.title}
          </Typography>
          <Typography>
            Создана: {formatToDate(getProjectData?.createdAt as string)}
          </Typography>
        </Box>

        <Button
          variant="outlined"
          size="large"
          sx={{ bgcolor: "#ff000012", color: "red", borderColor: "red" }}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </Button>
      </PaperWrapper>
    </div>
  );
};
