import { AntPagination } from "@/shared/layout/pagination/Pagination";
import { useState } from "react";
import { Card } from "../Card/Card";

const fakeData = [
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/concept-d-%C3%AAtre-heureux-avec-des-mains-tenant-une-banni%C3%A8re-sur-ce-qui-est-%C3%A9crit-le-bonheur-de-mot-bien-et-joie-partir-en-141984449.jpg",
    title: "La clès du bonheure",
    destiny: "Version femme",
  },
];

export const HapinessAndHealth = () => {
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
