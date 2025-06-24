import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { taskService } from "../services";

export const useDeleteTask = () => {
  const { trigger, data, isMutating } = useSWRMutation(
    [`/task/delete-task`],
    (url, { arg }: { arg: Object }) => taskService.deleteTask(arg),
    {
      onSuccess: (arg) => {
        mutate([`/task/get-tasks/${arg.projectId}`]);
      },
      onError: () => {},
    }
  );

  return {
    deleteTaskTrigger: trigger,
    deleteTaskData: data,
    deleteTaskMutating: isMutating,
  };
};
