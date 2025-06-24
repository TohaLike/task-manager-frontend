import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { projectService, taskService } from "../services";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useDeleteProject = (id: string) => {
  const router = useRouter();
  const urlDelete = `/workspace/delete-project/${id}`;

  const { trigger, data, isMutating } = useSWRMutation(
    [urlDelete],
    (url, { arg }: { arg: Object }) => projectService.deleteProject(urlDelete),
    {
      onSuccess: (arg) => {
        router.push("/home");
        toast.success("Проект успешно удален!");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    deleteProjectTrigger: trigger,
    deleteProjectData: data,
    deleteProjectMutating: isMutating,
  };
};
