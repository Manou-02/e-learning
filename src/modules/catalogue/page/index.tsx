import { Container } from "@/shared/layout/container/Container";
import { Card } from "../components/Card/Card";
import { AntPagination } from "@/shared/layout/pagination/Pagination";

export const CataloguePage = () => {
  return (
    <Container>
      <p>catalogue</p>
      <div className="my-[20px] flex flex-wrap gap-[20px] w-full">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <AntPagination total={40} onChange={(e) => console.log(e)} />
    </Container>
  );
};
