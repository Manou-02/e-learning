import { Container } from "@/shared/layout/container/Container";
import { Avatar } from "antd";
import { useState } from "react";
import { FiUser } from "react-icons/fi";

const fakeFormation = [
  {
    title: "Guide d'autoformation",
    image:
      "https://books.openedition.org/pum/docannexe/file/10744/pum-8084-img01-small225.jpg",
  },
  {
    title: "L'autoformation",
    image:
      "https://www.cairn.info/cover/width-204/PUF_FPP/PUF_CARRE_2010_02.jpg?fallback=true",
  },
];

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
  const [allFormation] = useState<Array<any>>(fakeFormation);

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
                  className={`w-ful py-[20px] px-[10px] cursor-pointer rounded-tl-[8px] rounded-bl-[8px] hover:bg-slate-400 hover:text-white ${
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
          {activeKey === "library" ? (
            <div className="">
              <div className="bg-slate-400 text-white w-full flex justify-center items-center py-[30px]">
                {" "}
                <span className="text-xl font-bold">Ma bibliotheques </span>
              </div>

              <div className="p-[20px] mt-[40px] flex flex-wrap gap-[20px]">
                {allFormation?.length &&
                  allFormation?.map((item: any, key: number) => (
                    <div
                      key={key}
                      className="w-[250px] cursor-pointer hover:scale-105 duration-150 border border-slate-400 rounded-[8px]"
                    >
                      <img
                        src={item?.image}
                        className="w-full h-[80%] rounded-[8px] object-cover"
                        alt=""
                      />
                      <div className="p-[20px]">
                        <p className="text-white">{item?.title}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Container>
  );
};
