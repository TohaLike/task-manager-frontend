import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { projectService } from "../services";
import { mutate } from "swr";

export const useCreateProject = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/workspace/create-project"],
    (url, { arg }: { arg: Object }) => projectService.createProject(arg),
    {
      onSuccess: () => {
        mutate(["/workspace/get-projects"]);
      },
      onError: () => {},
    }
  );

  return {
    createProjectTrigger: trigger,
    createProjectData: data,
    createProjectMutating: isMutating,
  };
};
