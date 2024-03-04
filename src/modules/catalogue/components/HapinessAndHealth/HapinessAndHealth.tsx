import { AntPagination } from "@/shared/layout/pagination/Pagination";
import { useState } from "react";
import { Card } from "../Card/Card";
import { Checkbox } from "antd";

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

export const HapinessAndHealth = () => {
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
