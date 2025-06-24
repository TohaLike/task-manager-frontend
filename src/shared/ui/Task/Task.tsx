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
import { TasksProps } from "@/shared/types";
import { useGetTasks } from "@/features/Project/hooks";
import { ITask } from "@/features/Project/types/tasks.types";

export const TaskItem: React.FC = () => {
  return <div></div>;
};

export const ProjectsList: React.FC = () => {
  const { getProjectData } = useGetProject();

  return (
    <div>
      <Box mt={4}>
        <Typography
          sx={{ mb: 1, fontSize: 32, fontWeight: "600" }}
          variant="h2"
        >
          Projects
        </Typography>

        <Typography sx={{ mb: 2, fontSize: 16 }} variant="body1">
          You have{" "}
          <span style={{ color: "#0157FF", fontWeight: "700" }}>
            {getProjectData?.length}
          </span>{" "}
          Projects
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
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
                  Progress
                </Typography>
              </CardContent>
              {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export const TaskList: React.FC<TasksProps> = ({ id }) => {
  const { getTasksData } = useGetTasks(id);

  return (
    <div>
      <Box mt={4}>
        <Typography
          sx={{ mb: 1, fontSize: 32, fontWeight: "600" }}
          variant="h2"
        >
          Tasks
        </Typography>

        <Typography sx={{ mb: 2, fontSize: 16 }} variant="body1">
          You have{" "}
          <span style={{ color: "#0157FF", fontWeight: "700" }}>
            {getTasksData?.length}
          </span>{" "}
          Tasks
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1.4,
          }}
        >
          {getTasksData?.map((task: ITask) => (
            <Card
              key={`task-item-${task.id}`}
              component={Link}
              href={`/project/${task.id}`}
              sx={{ bgcolor: "#0157FF", color: "#fff", borderRadius: 4 }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: 32 }}>
                  {task.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 4, fontSize: 16, fontWeight: "400" }}
                >
                  Progress
                </Typography>
              </CardContent>
              {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
          ))}
        </Box>
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
