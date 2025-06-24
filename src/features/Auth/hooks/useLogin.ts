import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { authService } from "../services";

export const useLogin = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/auth/login"],
    (url, { arg }: { arg: Object }) => authService.login(arg),
    {
      onSuccess: () => {
        return router.push("/");
      },
      onError: () => {},
    },
  );

  return {
    loginTrigger: trigger,
    loginData: data,
    loginMutating: isMutating,
  };
};
