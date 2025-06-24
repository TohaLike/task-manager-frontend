"use client";
import React from "react";
import { useGetProject } from "@/features/Home/hooks";
import { IProject } from "@/features/Home/types/project.types";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import { TasksProps } from "@/shared/types";
import {
  useCompleteTask,
  useDeleteTask,
  useGetTasks,
} from "@/features/Project/hooks";
import { ITask } from "@/features/Project/types/tasks.types";
import {
  pluralizeProjects,
  pluralizeTasks,
} from "@/shared/helpers/pluralize-title.helper";
import AddIcon from "@mui/icons-material/Add";
import { AddTaskForm } from "@/features/Project/components";
import { AddProjectForm } from "@/features/Home/components";
import { formatToDate } from "@/shared/helpers";

export const MenuComponent: React.FC<
  React.PropsWithChildren & { title: string }
> = ({ children, title }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        type="submit"
        startIcon={<AddIcon />}
        onClick={handleClick}
        sx={{
          borderRadius: 4,
          bgcolor: "#0157FF20",
          color: "bule",
          textTransform: "none",
        }}
      >
        {title}
      </Button>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiList-root": {
            p: 0,
          },
        }}
        PaperProps={{
          style: {
            width: 500,
            borderRadius: "16px",
          },
        }}
      >
        <Box sx={{ width: "100%", p: 2 }}>{children}</Box>
      </Menu>
    </div>
  );
};

export const ProjectsList: React.FC = () => {
  const { getProjectData } = useGetProject();

  return (
    <div>
      <Box mt={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{ mb: 1, fontSize: 32, fontWeight: "600" }}
              variant="h2"
            >
              Проекты
            </Typography>

            <Typography sx={{ mb: 2, fontSize: 16 }} variant="body1">
              У вас{" "}
              <span style={{ color: "#0157FF", fontWeight: "700" }}>
                {getProjectData?.length || 0}
              </span>{" "}
              {pluralizeProjects(getProjectData?.length as number)}
            </Typography>
          </Box>

          <MenuComponent title="Добавить проект">
            <AddProjectForm />
          </MenuComponent>
        </Box>

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
              variant="outlined"
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
                  Создан {formatToDate(project.createdAt as string)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export const TaskList: React.FC<TasksProps> = ({ id }) => {
  const { getTasksData } = useGetTasks(id);

  const { completeTaskTrigger } = useCompleteTask();

  const { deleteTaskTrigger } = useDeleteTask();

  console.log(getTasksData?.map((task: ITask) => task.id));

  return (
    <div>
      <Box mt={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{ mb: 1, fontSize: 32, fontWeight: "600" }}
              variant="h2"
            >
              Задачи
            </Typography>

            <Typography sx={{ mb: 2, fontSize: 16 }} variant="body1">
              У вас{" "}
              <span style={{ color: "#0157FF", fontWeight: "700" }}>
                {getTasksData?.length || 0}
              </span>{" "}
              {pluralizeTasks(getTasksData?.length as number)}
            </Typography>
          </Box>

          <MenuComponent title="Добавить задачу">
            <AddTaskForm id={id} />
          </MenuComponent>
        </Box>
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
              variant="outlined"
              sx={{
                bgcolor: task.isComplited ? "#e0ffe0" : "#fff",
                color: "#000",
                borderRadius: 4,
                opacity: task.isComplited ? 0.6 : 1, // визуально "приглушить"
                // textDecoration: task.isComplited ? "line-through" : "none",
              }}
            >
              <Typography variant="subtitle1" sx={{ p: "8px 16px 0px", fontSize: 14 }}>
                {task.isComplited ? "Выполнено" : "В процессе"}
              </Typography>
              <CardContent
                sx={{
                  textDecoration: task.isComplited ? "line-through" : "none",
                }}
              >
                <Typography variant="h5" sx={{ fontSize: 32 }}>
                  {task.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 4, fontSize: 16, fontWeight: "400" }}
                >
                  {task.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
              >
                <Button
                  onClick={() => completeTaskTrigger({ id: task.id })}
                  variant="outlined"
                  sx={{
                    bgcolor: "#00ff0d75",
                    color: "#008407",
                    textTransform: "none",
                  }}
                >
                  Завершить
                </Button>
                <Button
                  onClick={() => deleteTaskTrigger({ id: task.id })}
                  variant="outlined"
                  sx={{
                    bgcolor: "#0157FF20",
                    color: "#0157FF",
                    textTransform: "none",
                  }}
                >
                  Удалить
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};
