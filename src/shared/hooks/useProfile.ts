import toast from "react-hot-toast";
import { userService } from "../services";
import useSWR from "swr";

export const usePofile = () => {
  const { data, isLoading } = useSWR(
    ["/user/me"],
    () => userService.profile(),
    {
      onSuccess: () => {},
      onError: (error) => {
        toast.error(error.response.data.message);
      },
      revalidateOnFocus: false,
    }
  );

  return {
    profileData: data,
    profileLoading: isLoading,
  };
};
