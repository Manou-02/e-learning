import { Container } from "@/shared/layout/container/Container";
import { Card } from "../components/Card/Card";
import { AntPagination } from "@/shared/layout/pagination/Pagination";
import { Tabs } from "antd";
import { TabsProps } from "antd/lib";
import { PersonalDevelopment } from "../components/PersonalDevelopment/PersonalDevelopment";
import { HapinessAndHealth } from "../components/HapinessAndHealth/HapinessAndHealth";
import { ProfessionalDevelopment } from "../components/ProfessionalDevelopment/ProfessionalDevelopment";
import { RelationAndCommunication } from "../components/RelationAndCommunication/RelationAndCommunication";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Développemnt personnel",
    children: <PersonalDevelopment />,
  },
  {
    key: "2",
    label: "Bonheur et santé",
    children: <HapinessAndHealth />,
  },
  {
    key: "3",
    label: "Développement professionnel",
    children: <ProfessionalDevelopment />,
  },
  {
    key: "4",
    label: "Relation et communication aux autres",
    children: <RelationAndCommunication />,
  },
];

export const CataloguePage = () => {
  const onChangeTabs = (e: any) => {
    console.log("zazaza\n", e);
  };

  return (
    <Container>
      <p className="font-bold text-xl my-[20px]">Cours</p>
      <div className="flex gap-[10px]">
        <div className="flex-1">
          <p>Filtres</p>
        </div>
        <div className="">
          <Tabs defaultActiveKey="1" items={items} onChange={onChangeTabs} />
        </div>
      </div>
    </Container>
  );
};
