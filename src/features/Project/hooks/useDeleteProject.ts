import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { projectService, taskService } from "../services";
import { useRouter } from "next/navigation";

export const useDeleteProject = (id: string) => {
  const router = useRouter();
  const urlDelete = `/workspace/delete-project/${id}`;

  const { trigger, data, isMutating } = useSWRMutation(
    [urlDelete],
    (url, { arg }: { arg: Object }) => projectService.deleteProject(urlDelete),
    {
      onSuccess: (arg) => {
        router.push("/home");
      },
      onError: () => {},
    }
  );

  return {
    deleteProjectTrigger: trigger,
    deleteProjectData: data,
    deleteProjectMutating: isMutating,
  };
};
