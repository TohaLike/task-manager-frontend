import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { taskService } from "../services";

export const useCreateTask = () => {
  const { trigger, data, isMutating } = useSWRMutation(
    ["/task/create-task"],
    (url, { arg }: { arg: Object }) => taskService.createTask(arg),
    {
      onSuccess: (arg) => {
        mutate([`/task/get-tasks/${arg.projectId}`]);
      },
      onError: () => {},
    }
  );

  return {
    createTaskTrigger: trigger,
    createTaskData: data,
    createTaskMutating: isMutating,
  };
};
