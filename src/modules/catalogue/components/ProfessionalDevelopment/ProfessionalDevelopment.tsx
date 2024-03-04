import { AntPagination } from "@/shared/layout/pagination/Pagination";
import { useState } from "react";
import { Card } from "../Card/Card";
import { Checkbox } from "antd";

const fakeData = [
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
  {
    image:
      "https://www.successfinder.com/wp-content/uploads/2021/10/Fr-visual-1024x536.jpg",
    title: "6 domaines du developpement professionnel",
    destiny: "Version homme",
  },
];

const filterType = [
  {
    label: "Développement personnel",
  },
  {
    label: "Productivité",
  },
  {
    label: "Relationel, psycologie et communication ",
  },
  {
    label: "Santé et nutrition",
  },
  {
    label: "Bonheur et méditation",
  },
  {
    label: "Management et leadership ",
  },
  {
    label: "Entreprenariat ",
  },
  {
    label: "Marketing et ventes",
  },
  {
    label: "Sexe ",
  },
  {
    label: "Parentalité / Famille ",
  },
];

export const ProfessionalDevelopment = () => {
  const [allData] = useState<Array<any>>(fakeData);
  const [allFilterType] = useState<Array<any>>(filterType);

  return (
    <div className="flex gap-[20px] w-full">
      <div className="bg-slate-50 p-[10px] rounded-[8px]  min-w-max max-w-max">
        <p className="font-semibold text-lg mb-[20px]"> Filtrer par </p>
        <div className="flex flex-col gap-[10px]">
          {allFilterType?.length &&
            allFilterType?.map((item: any, index: number) => (
              <div className="" key={index}>
                <Checkbox> {item?.label} </Checkbox>
              </div>
            ))}
        </div>
      </div>
      <div className="">
        <div className="my-[20px] flex-4 flex flex-wrap gap-[20px] w-full">
          {allData?.length &&
            allData?.map((item: any, index: number) => (
              <Card
                key={index}
                image={item?.image}
                destiny={item?.destiny}
                title={item?.title}
              />
            ))}
        </div>
        <AntPagination total={40} onChange={(e) => console.log(e)} />
      </div>
    </div>
  );
};
