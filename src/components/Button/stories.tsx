import React from 'react';
import Button, { ButtonProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  Done,
  RotateLeft,
  RotateRight,
  InsertEmoticon,
  TextSnippet,
  Link,
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

Default.argTypes = {
  as: { control: { type: null } },
  href: { control: { type: null } },
};

export const Disabled: Story<ButtonProps> = (args) => <Button {...args} />;

Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

Disabled.argTypes = {
  as: { control: { type: null } },
  href: { control: { type: null } },
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  children: <InsertEmoticon title="emoticon" />,
};

WithIcon.argTypes = {
  as: { control: { type: null } },
  children: { control: { type: null } },
  href: { control: { type: null } },
};

export const WithLeftIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithLeftIcon.args = {
  children: 'Left Icon',
  color: 'primary',
  leftIcon: <RotateLeft title="rotate left" />,
};

WithLeftIcon.argTypes = {
  as: { control: { type: null } },
  href: { control: { type: null } },
};

export const WithRightIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithRightIcon.args = {
  children: 'Right Icon',
  color: 'secondary',
  rightIcon: <RotateRight title="rotate right" />,
};

WithRightIcon.argTypes = {
  as: { control: { type: null } },
  href: { control: { type: null } },
};

export const OutlineWithIcon: Story<ButtonProps> = (args) => (
  <Button {...args} />
);

OutlineWithIcon.args = {
  children: <Done title="done" />,
  variant: 'outline',
};

OutlineWithIcon.argTypes = {
  as: { control: { type: null } },
  children: { control: { type: null } },
  href: { control: { type: null } },
};

export const TextWithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

TextWithIcon.argTypes = {
  as: { control: { type: null } },
  children: { control: { type: null } },
  href: { control: { type: null } },
};

export const LinkWithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

LinkWithIcon.args = {
  as: 'a',
  href: '/?path=/story/button--link-with-icon',
  children: 'Link',
  color: 'danger',
  rightIcon: <Link title="link" />,
};

TextWithIcon.args = {
  children: <TextSnippet title="text snippet" />,
  variant: 'text',
};
