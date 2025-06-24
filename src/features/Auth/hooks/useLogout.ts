import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { authService } from "../services";
import toast from "react-hot-toast";

export const useLogout = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/auth/logout"],
    (url, { arg }: { arg: Object }) => authService.logout(),
    {
      onSuccess: () => {
        router.push("/auth/login");
        toast.success("Вы успешно вышли!");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    logoutTrigger: trigger,
    logoutData: data,
    logoutMutating: isMutating,
  };
};
