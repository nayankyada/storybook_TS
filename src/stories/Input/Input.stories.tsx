import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const InputTemplate : ComponentStory<typeof Input> = (args) => <Input {...args}/>