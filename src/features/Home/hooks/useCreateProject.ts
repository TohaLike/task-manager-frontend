import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { projectService } from "../services";

export const useCreateProject = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/workspace/create-project"],
    (url, { arg }: { arg: Object }) => projectService.createProject(arg),
    {
      onSuccess: () => {
        return router.push("/");
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
