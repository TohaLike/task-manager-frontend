"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { useGetProject } from "@/features/Home/hooks";
import { IProject } from "@/features/Home/types/project.types";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import Link from "next/link";

export const TaskItem: React.FC = () => {
  return <div></div>;
};


export const InteractiveList: React.FC = () => {
  const { getProjectData } = useGetProject();

  return (
    <div>
      <Typography sx={{ mb: 1, fontSize: 32, fontWeight: "500" }} variant="h2">
        Проекты
      </Typography>

      <Typography sx={{ mb: 2, fontSize: 16 }} variant="body1">
        У вас{" "}
        <span style={{ color: "#0157FF", fontWeight: "700" }}>
          {getProjectData?.length}
        </span>{" "}
        проектов
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1.4,
        }}
      >
        {getProjectData?.map((project: IProject) => (
          <Card
            key={`project-item-${project.id}`}
            component={Link}
            href={`/project/${project.id}`}
            sx={{ bgcolor: "#0157FF", color: "#fff", borderRadius: 4 }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontSize: 32 }}>
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 4, fontSize: 16, fontWeight: "400" }}
              >
                Прогресс
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        ))}
      </Box>
    </div>
  );
};

// <ListItem
//   key={`project-item-${project.id}`}
//   divider
//   secondaryAction={
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//   }
//   sx={{
//     bgcolor: "#0157FF",
//     borderRadius: 4,
//     color: "#fff",
//   }}
// >
//   <ListItemText primary={project.title} />
// </ListItem>
