import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import { taskService } from "../services";

export const useCreateTask = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/workspace/create-project"],
    (url, { arg }: { arg: Object }) => taskService.createTask(arg),
    {
      onSuccess: () => {
        mutate(["/workspace/get-projects"]);
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
