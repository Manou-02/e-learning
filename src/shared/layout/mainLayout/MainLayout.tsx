import React, { FC } from "react";
import style from "./style.module.scss";

type PropsType = {
  children: React.ReactNode;
};

export const MainLayout: FC<PropsType> = ({ children }) => {
  return <div className={style.main__container}> {children} </div>;
};
