import { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from './Text'

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum!",
    size: 'md'
  },
  argTypes:{
    size:{
      options: ['sm', 'md', 'lg'],
      control:{
        type: "inline-radio"
      }
    }
  }
} as Meta<TextProps>
export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args:{
    size: "sm"
  }
};

export const Large: StoryObj<TextProps> = {
  args:{
    size: "lg"
  }
};

export const CustomComponent: StoryObj<TextProps> = {
  args:{
    asChild: true,
    children: (
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae repellendus eius fugit ducimus enim quod, provident illo modi exercitationem voluptas velit magnam quia laboriosam, facere nesciunt saepe, ex eveniet?</p>
    )
  },
  argTypes:{
    children:{
      control: {
        disable: true
      }
    },
    asChild:{
      control:{
        disable: true
      }
    }
  }
}