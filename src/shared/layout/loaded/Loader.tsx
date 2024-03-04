import { FC } from "react";

type PropsType = {
  isLoading: boolean;
};

export const Loader: FC<PropsType> = ({ isLoading }) => {
  return isLoading ? (
    <div className="w-full h-full bg-red-600">Loader</div>
  ) : (
    ""
  );
};
