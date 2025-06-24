import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { authService } from "../services";

export const useRegister = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/auth/register"],
    (url, { arg }: { arg: Object }) => authService.register(arg),
    {
      onSuccess: () => {
        router.push("/auth/verification");
      },
      onError: () => {},
    },
  );

  return {
    registerTrigger: trigger,
    registerData: data,
    registerMutating: isMutating,
  };
};
