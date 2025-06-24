import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { projectService } from "../services";
import { mutate } from "swr";
import toast from "react-hot-toast";

export const useCreateProject = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/workspace/create-project"],
    (url, { arg }: { arg: Object }) => projectService.createProject(arg),
    {
      onSuccess: () => {
        mutate(["/workspace/get-projects"]);
        toast.success("Задача успешно создана!");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    createProjectTrigger: trigger,
    createProjectData: data,
    createProjectMutating: isMutating,
  };
};
