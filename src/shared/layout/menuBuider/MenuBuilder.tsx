import { FC, useEffect, useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
// import { Color } from "@/shared/config/Colors";

type TypeMenuItem = {
  label: string;
  key: string;
  icon?: React.ReactNode;
  path?: string;
  children?: TypeMenuItem[];
  type?: string;
};

type PropsType = {
  menuList: Array<TypeMenuItem>;
  width?: number | string;
  mode?: "vertical" | "horizontal" | "inline";
  isActive?: boolean;
};

export const MenuBuilder: FC<PropsType> = ({
  menuList,
  width,
  mode = "inline",
  isActive = false,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeKey, setActiveKey] = useState<string>("/");

  useEffect(() => {
    setActiveKey(activeKey);
  }, [location]);

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <>
      <Menu
        className={classNames({
          "h-[100vh] overflow-y-auto": mode === "inline",
          "flex justify-center items-start": mode != "inline",
          "border-none": mode != "inline",
          "bg-darkBlue": mode === "inline",
        })}
        onClick={onClick}
        style={{ width, color: "gray", fontWeight: "bold" }}
        defaultSelectedKeys={
          isActive
            ? [
                menuList[0]?.children
                  ? menuList[0]?.children[0]["key"]
                  : menuList[0]["key"],
              ]
            : []
        }
        activeKey={activeKey}
        defaultOpenKeys={[menuList[0]["key"]]}
        mode={mode}
        items={menuList}
      />
    </>
  );
};
