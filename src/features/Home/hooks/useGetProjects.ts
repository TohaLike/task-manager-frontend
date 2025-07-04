import toast from "react-hot-toast";
import { projectService } from "../services";
import useSWR from "swr";

export const useGetProject = () => {
  const { data, isLoading } = useSWR(
    ["/workspace/get-projects"],
    () => projectService.getProjects(),
    {
      onSuccess: () => {},
      onError: (error) => {
        toast.error(error.response.data.message);
      },
      revalidateOnFocus: false,
    }
  );

  return {
    getProjectData: data,
    getProjectLoading: isLoading,
  };
};
