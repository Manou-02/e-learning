import { Avatar, Tooltip } from "antd";
import { FiUser } from "react-icons/fi";

export const Card = () => {
  return (
    <div className="w-[300px] h-[420px] hover:scale-105 bg-white border rounded-[8px] flex flex-col gap-[10px] cursor-pointer border-slate-100 p-[10px]">
      <div className="bg-slate-300 w-full h-[70%] rounded-[8px] ">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg"
          alt=""
          className="w-full h-full rounded-[8px] object-cover"
        />
      </div>
      <div className="w-full mt-[10px]  flex flex-col justify-evenly">
        <div className="h-fullmb-[20px]">
          <p className="font-semibold mb-[5px]">
            {" "}
            Les cles pour une confiance en soi{" "}
          </p>
          <p className="font-light italic text-sm flex gap-[10px]">
            {" "}
            <FiUser /> Version femme{" "}
          </p>
        </div>
        <div className="flex justify-between items-center border-slate-100 my-[20px]">
          <a href="" className="flex items-center text-blue-500 gap-[20px]">
            <Tooltip title="Contributeurs" placement="top" trigger="hover">
              <Avatar.Group>
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<FiUser />}
                />
              </Avatar.Group>
            </Tooltip>
            Voir les contributeurs
          </a>
        </div>
      </div>
    </div>
  );
};
