import { Container } from "@/shared/layout/container/Container";
import { Tabs } from "antd";
import { TabsProps } from "antd/lib";
import { PersonalDevelopment } from "../components/PersonalDevelopment/PersonalDevelopment";
import { HapinessAndHealth } from "../components/HapinessAndHealth/HapinessAndHealth";
import { ProfessionalDevelopment } from "../components/ProfessionalDevelopment/ProfessionalDevelopment";
import { RelationAndCommunication } from "../components/RelationAndCommunication/RelationAndCommunication";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Développement personnel",
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
    console.log("\n", e);
  };

  return (
    <Container>
      <p className="font-bold text-xl my-[20px]">Cours</p>
      <div className="flex gap-[10px]">
        <Tabs defaultActiveKey="1" items={items} onChange={onChangeTabs} />
      </div>
    </Container>
  );
};
