import { AntPagination } from "@/shared/layout/pagination/Pagination";
import { Card } from "../Card/Card";
import { useState } from "react";
const fakeData = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_640.jpg",
    title: "Les cles pour une confiance en soi",
    destiny: "Version femme",
  },
];

export const PersonalDevelopment = () => {
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
