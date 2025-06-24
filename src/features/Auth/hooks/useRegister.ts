import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { authService } from "../services";
import toast from "react-hot-toast";

export const useRegister = () => {
  const router = useRouter();

  const { trigger, data, isMutating } = useSWRMutation(
    ["/auth/register"],
    (url, { arg }: { arg: Object }) => authService.register(arg),
    {
      onSuccess: () => {
        router.push("/home");
        toast.success("Вы успешно зарегистрировались!");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return {
    registerTrigger: trigger,
    registerData: data,
    registerMutating: isMutating,
  };
};
