import React from 'react';
import Button, { ButtonProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  Done,
  RotateLeft,
  RotateRight,
  InsertEmoticon,
  TextSnippet,
} from '@styled-icons/material';

export default {
  argTypes: {
    leftIcon: { control: { type: null } },
    rightIcon: { control: { type: null } },
  },
  component: Button,
  title: 'Button',
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Button',
};

export const Disabled: Story<ButtonProps> = (args) => <Button {...args} />;

Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.argTypes = {
  children: { control: { type: null } },
};

WithIcon.args = {
  children: <InsertEmoticon title="emoticon" />,
};

export const OutlineWithIcon: Story<ButtonProps> = (args) => (
  <Button {...args} />
);

OutlineWithIcon.argTypes = {
  children: { control: { type: null } },
};

OutlineWithIcon.args = {
  children: <Done title="done" />,
  variant: 'outline',
};

export const TextWithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

TextWithIcon.argTypes = {
  children: { control: { type: null } },
};

TextWithIcon.args = {
  children: <TextSnippet title="text snippet" />,
  variant: 'text',
};

export const WithLeftIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithLeftIcon.args = {
  children: 'Left Icon',
  color: 'primary',
  leftIcon: <RotateLeft title="rotate left" />,
};

export const WithRightIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithRightIcon.args = {
  children: 'Right Icon',
  color: 'secondary',
  rightIcon: <RotateRight title="rotate right" />,
};
