import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { authService } from "../services";

export const useLogout = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/auth/logout"],
    (url, { arg }: { arg: Object }) => authService.logout(),
    {
      onSuccess: () => {
        return router.push("/auth/login");
      },
      onError: () => {},
    },
  );

  return {
    logoutTrigger: trigger,
    logoutData: data,
    logoutMutating: isMutating,
  };
};
