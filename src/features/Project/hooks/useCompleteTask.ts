import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { taskService } from "../services";
import toast from "react-hot-toast";

export const useCompleteTask = () => {
  const { trigger, data, isMutating } = useSWRMutation(
    ["/task/complete-task"],
    (url, { arg }: { arg: Object }) => taskService.completeTask(arg),
    {
      onSuccess: (arg) => {
        mutate([`/task/get-tasks/${arg.projectId}`]);
        if (arg.isComplited) {
          toast.success("Задача успешно выполнена!");
        } else {
          toast.error("Задача успешно отменена!");
        }
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    completeTaskTrigger: trigger,
    completeTaskData: data,
    completeTaskMutating: isMutating,
  };
};
