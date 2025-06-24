import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { taskService } from "../services";
import toast from "react-hot-toast";

export const useDeleteTask = () => {
  const { trigger, data, isMutating } = useSWRMutation(
    [`/task/delete-task`],
    (url, { arg }: { arg: Object }) => taskService.deleteTask(arg),
    {
      onSuccess: (arg) => {
        mutate([`/task/get-tasks/${arg.projectId}`]);
        toast.success("Задача успешно удалена!");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    deleteTaskTrigger: trigger,
    deleteTaskData: data,
    deleteTaskMutating: isMutating,
  };
};
