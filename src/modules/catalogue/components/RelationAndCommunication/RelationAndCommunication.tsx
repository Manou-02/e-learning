import { useState } from "react";
import { Card } from "../Card/Card";
import { AntPagination } from "@/shared/layout/pagination/Pagination";
import { Checkbox } from "antd";

const fakeData = [
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
  },
  {
    image:
      "https://ceavao.fr/wp-content/uploads/2021/03/problemes-de-communication.jpg",
    title: "L'art de se communiquer",
    destiny: "Version pour tous",
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
export const RelationAndCommunication = () => {
  const [allData] = useState<Array<any>>(fakeData);
  const [allFilterType] = useState<Array<any>>(filterType);

  return (
    <div className="flex gap-[20px] w-full">
      <div className="bg-slate-50 p-[10px] rounded-[8px] w-full">
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
