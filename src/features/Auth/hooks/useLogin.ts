import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { authService } from "../services";
import toast from "react-hot-toast";

export const useLogin = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/auth/login"],
    (url, { arg }: { arg: Object }) => authService.login(arg),
    {
      onSuccess: () => {
        router.push("/");
        toast.success("Вы успешно вошли!");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    loginTrigger: trigger,
    loginData: data,
    loginMutating: isMutating,
  };
};
