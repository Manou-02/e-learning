import { useState } from "react";
import { Card } from "../Card/Card";
import { AntPagination } from "@/shared/layout/pagination/Pagination";

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
export const RelationAndCommunication = () => {
  const [allData] = useState<Array<any>>(fakeData);

  return (
    <>
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
    </>
  );
};
