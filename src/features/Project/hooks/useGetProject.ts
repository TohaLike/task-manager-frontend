import { projectService } from "../services";
import useSWR from "swr";

export const useGetProject = (id: string) => {
  const url = `/workspace/get-project/${id}`;

  const { data, isLoading } = useSWR(
    [url],
    () => projectService.getProject(url),
    {
      onSuccess: () => {},
      onError: () => {},
      revalidateOnFocus: false,
    }
  );

  return {
    getProjectData: data,
    getProjectLoading: isLoading,
  };
};
