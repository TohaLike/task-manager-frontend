import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { taskService } from "../services";
import toast from "react-hot-toast";

export const useCreateTask = () => {
  const { trigger, data, isMutating } = useSWRMutation(
    ["/task/create-task"],
    (url, { arg }: { arg: Object }) => taskService.createTask(arg),
    {
      onSuccess: (arg) => {
        mutate([`/task/get-tasks/${arg.projectId}`]);
        toast.success("Задача успешно создана!");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    createTaskTrigger: trigger,
    createTaskData: data,
    createTaskMutating: isMutating,
  };
};
