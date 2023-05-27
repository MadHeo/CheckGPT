import { useRouter } from "next/router";

const usePageRouter = () => {
  const { push, back } = useRouter();

  return {
    push,
    back,
  };
};

export default usePageRouter;
