import { projectService } from "../services";
import useSWR from "swr";

export const useGetProject = () => {

  const { data, isLoading } = useSWR(
    ["/workspace/get-projects"],
    () => projectService.getProjects(),
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
