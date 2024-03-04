import { FC } from "react";
import { Pagination as APagination, PaginationProps } from "antd";
// import { formatMoney } from "@/shared/utils/formatMoney";

type PropsType = {
  total: number;
  pageSize?: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  responsive?: boolean;
  onChange: (e: any) => void;
};

export const AntPagination: FC<PropsType> = ({
  defaultCurrent = 1,
  total,
  pageSize = 10,
  onChange,
}) => {
  const showTotal: PaginationProps["showTotal"] = (total) =>
    `Total ${total} articles.`;
  return (
    <APagination
      defaultCurrent={defaultCurrent}
      current={defaultCurrent | 1}
      total={total || 0}
      showTotal={showTotal}
      pageSize={pageSize || 10}
      onChange={(page: any, itemsPerPage: any) => {
        onChange({ page, itemsPerPage });
      }}
    />
  );
};
