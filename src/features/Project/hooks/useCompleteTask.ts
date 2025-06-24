import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { taskService } from "../services";

export const useCompleteTask = () => {

  const { trigger, data, isMutating } = useSWRMutation(
    ["/task/complete-task"],
    (url, { arg }: { arg: Object }) => taskService.completeTask(arg),
    {
      onSuccess: (arg) => {
        mutate([`/task/get-tasks/${arg.projectId}`]);
      },
      onError: () => {},
    }
  );

  return {
    completeTaskTrigger: trigger,
    completeTaskData: data,
    completeTaskMutating: isMutating,
  };
};
