import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from "./Index";

export default {
  title: "Pagination",
  component: Pagination,
 
  // this args will apply to all Stories 
  args:{
      total:500
  }
} as ComponentMeta<typeof Pagination>;

export const PaginationTemplate: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
export const FirstPagination = PaginationTemplate.bind({});
FirstPagination.args = {
  size: "default",
  showQuickJumper:true,
  showSizeChanger:true,

};
