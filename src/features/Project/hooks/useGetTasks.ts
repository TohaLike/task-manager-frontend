import { projectService, taskService } from "../services";
import useSWR from "swr";

export const useGetTasks = (id: string) => {
  const url = `/task/get-tasks/${id}`;

  const { data, isLoading } = useSWR(
    [url],
    () => taskService.getAllTasks(url),
    {
      onSuccess: () => {},
      onError: () => {},
      revalidateOnFocus: false,
    }
  );

  return {
    getTasksData: data,
    getTasksLoading: isLoading,
  };
};
