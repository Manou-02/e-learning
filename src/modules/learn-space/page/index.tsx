import { Container } from "@/shared/layout/container/Container";
import { Avatar } from "antd";
import { useState } from "react";
import { FiUser } from "react-icons/fi";

const menuItems = [
  {
    label: "Ma bibliotheque",
    key: "library",
  },
  {
    label: "Parametres",
    key: "Setting",
  },
];

export const LearnSpacePage = () => {
  const [activeKey, setActiveKey] = useState<string>("library");
  const [allMenu] = useState<Array<any>>(menuItems);

  const handleClickMenu = (key: string) => {
    setActiveKey(key);
  };

  return (
    <Container>
      <p className="font-bold text-xl my-[20px]">Espace apprenant</p>
      <div className="flex p-[20px]">
        <div className="">
          <div className="flex gap-[10px] items-center  py-[20px] w-[250px] ">
            <Avatar size={64} icon={<FiUser />}>
              p
            </Avatar>
            <div className="">
              <p className="font-semibold text-lg">Mon compte</p>
              <p className="text-sm">Modifier</p>
            </div>
          </div>
          <hr className="text-slate-200" />
          <div className="pt-[40px] flex flex-col gap-[20px]">
            {allMenu?.length &&
              allMenu?.map((item: any, key: number) => (
                <div
                  key={key}
                  className={`w-ful py-[20px] px-[10px] cursor-pointer rounded-tl-[8px] rounded-bl-[8px] hover:bg-slate-600 hover:text-white ${
                    activeKey === item?.key ? "bg-slate-950 text-white " : ""
                  }`}
                  onClick={() => handleClickMenu(item?.key)}
                >
                  <p> {item?.label} </p>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-slate-950 w-full rounded-tl-[8px] rounded-tr-[8px] py-[40px]">
          <div className="">zaaza</div>
        </div>
      </div>
    </Container>
  );
};
