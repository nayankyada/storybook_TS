import { Pagination } from "antd";
import { ReactNode } from "react";
interface PaginationProps {
  size: "small" | "default";
  total: number;
  disabled: boolean;
  showTotal: (total:number) => ReactNode;
  showSizeChanger: boolean;
  showQuickJumper: boolean;
}
const Index: React.FC<PaginationProps> = (props) => {
  const { showQuickJumper, disabled, showTotal, size, total, showSizeChanger } =
    props;

  return (
    <Pagination
      size={size}
      total={total}
      disabled={disabled}
      showQuickJumper={showQuickJumper}
      showSizeChanger={showSizeChanger}
      showTotal={showTotal}
    />
  );
};
export default Index;
