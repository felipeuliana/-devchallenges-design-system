import React from 'react';
import Button, { ButtonProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
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
