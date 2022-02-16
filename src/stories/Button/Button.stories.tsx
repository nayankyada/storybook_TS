import React from "react";
import { Button } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { types } from "@storybook/addons";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;


export const ButtonTemplate : ComponentStory<typeof Button> = (args) => <Button {...args}/>

