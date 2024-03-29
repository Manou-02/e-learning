import { FC } from "react";

type PropsType = {
  children: React.ReactNode;
};

export const Container: FC<PropsType> = ({ children }) => {
  return (
    <div className="w-[100vw] flex justify-center ">
      <div className="w-[1280px]"> {children} </div>
    </div>
  );
};
