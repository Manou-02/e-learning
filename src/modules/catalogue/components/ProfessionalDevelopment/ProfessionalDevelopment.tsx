import { AntPagination } from "@/shared/layout/pagination/Pagination";
import { useState } from "react";
import { Card } from "../Card/Card";

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

export const ProfessionalDevelopment = () => {
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
