import React from 'react';
import Button from '.';
import { render, screen } from '@testing-library/react';

const DISABLED_STYLE = {
  'background-color': '#e0e0e0',
  'border-color': 'transparent',
  color: '#9e9e9e',
  cursor: 'not-allowed',
};

describe('<Button />', () => {
  test.todo('should render correctly');

  describe('"default" type', () => {
    it('should be styled correctly', () => {
      render(<Button>Default</Button>);

      expect(screen.getByRole('button', { name: /default/i })).toHaveStyle({
        'background-color': '#e0e0e0',
        'box-shadow': '0 0.2rem 0.3rem rgba(51,51,51,0.2)',
        color: '#3f3f3f',
      });
    });

    it('should render the "sm" size', () => {
      render(<Button size="sm">Default Small</Button>);

      const defaultSmall = screen.getByRole('button', {
        name: /default small/i,
      });

      render(
        <Button color="primary" size="sm">
          Primary Small
        </Button>
      );

      const primarySmall = screen.getByRole('button', {
        name: /primary small/i,
      });

      render(
        <Button color="secondary" size="sm">
          Secondary Small
        </Button>
      );

      const secondarySmall = screen.getByRole('button', {
        name: /secondary small/i,
      });

      render(
        <Button color="danger" size="sm">
          Danger Small
        </Button>
      );

      const dangerSmall = screen.getByRole('button', {
        name: /danger small/i,
      });

      expect(defaultSmall).toHaveStyle({ padding: '0.6rem 1.2rem' });
      expect(primarySmall).toHaveStyle({ padding: '0.6rem 1.2rem' });
      expect(secondarySmall).toHaveStyle({ padding: '0.6rem 1.2rem' });
      expect(dangerSmall).toHaveStyle({ padding: '0.6rem 1.2rem' });
    });

    it('should render the "md" size', () => {
      render(<Button size="md">Default Medium</Button>);

      const defaultMedium = screen.getByRole('button', {
        name: /default medium/i,
      });

      render(
        <Button color="primary" size="md">
          Primary Medium
        </Button>
      );

      const primaryMedium = screen.getByRole('button', {
        name: /primary medium/i,
      });

      render(
        <Button color="secondary" size="md">
          Secondary Medium
        </Button>
      );

      const secondaryMedium = screen.getByRole('button', {
        name: /secondary medium/i,
      });

      render(
        <Button color="danger" size="md">
          Danger Medium
        </Button>
      );

      const dangerMedium = screen.getByRole('button', {
        name: /danger medium/i,
      });

      expect(defaultMedium).toHaveStyle({ padding: '0.8rem 1.6rem' });
      expect(primaryMedium).toHaveStyle({ padding: '0.8rem 1.6rem' });
      expect(secondaryMedium).toHaveStyle({ padding: '0.8rem 1.6rem' });
      expect(dangerMedium).toHaveStyle({ padding: '0.8rem 1.6rem' });
    });

    it('should render the "lg" size', () => {
      render(<Button size="lg">Default Large</Button>);

      const defaultLarge = screen.getByRole('button', {
        name: /default large/i,
      });

      render(
        <Button color="primary" size="lg">
          Primary Large
        </Button>
      );

      const primaryLarge = screen.getByRole('button', {
        name: /primary large/i,
      });

      render(
        <Button color="secondary" size="lg">
          Secondary Large
        </Button>
      );

      const secondaryLarge = screen.getByRole('button', {
        name: /secondary large/i,
      });

      render(
        <Button color="danger" size="lg">
          Danger Large
        </Button>
      );

      const dangerLarge = screen.getByRole('button', {
        name: /danger large/i,
      });

      expect(defaultLarge).toHaveStyle({ padding: '1.1rem 2.2rem' });
      expect(primaryLarge).toHaveStyle({ padding: '1.1rem 2.2rem' });
      expect(secondaryLarge).toHaveStyle({ padding: '1.1rem 2.2rem' });
      expect(dangerLarge).toHaveStyle({ padding: '1.1rem 2.2rem' });
    });

    it('should render the "primary" color', () => {
      render(
        <Button color="primary" size="sm">
          Primary Small
        </Button>
      );

      const primarySmall = screen.getByRole('button', {
        name: /primary small/i,
      });

      render(
        <Button color="primary" size="md">
          Primary Medium
        </Button>
      );

      const primaryMedium = screen.getByRole('button', {
        name: /primary medium/i,
      });

      render(
        <Button color="primary" size="lg">
          Primary Large
        </Button>
      );

      const primaryLarge = screen.getByRole('button', {
        name: /primary large/i,
      });

      expect(primarySmall).toHaveStyle({
        'background-color': '#2962ff',
        color: '#fff',
      });

      expect(primaryMedium).toHaveStyle({
        'background-color': '#2962ff',
        color: '#fff',
      });

      expect(primaryLarge).toHaveStyle({
        'background-color': '#2962ff',
        color: '#fff',
      });
    });

    it('should render the "secondary" color', () => {
      render(
        <Button color="secondary" size="sm">
          Secondary Small
        </Button>
      );

      const secondarySmall = screen.getByRole('button', {
        name: /secondary small/i,
      });

      render(
        <Button color="secondary" size="md">
          Secondary Medium
        </Button>
      );

      const secondaryMedium = screen.getByRole('button', {
        name: /secondary medium/i,
      });

      render(
        <Button color="secondary" size="lg">
          Secondary Large
        </Button>
      );

      const secondaryLarge = screen.getByRole('button', {
        name: /secondary large/i,
      });

      expect(secondarySmall).toHaveStyle({
        'background-color': '#455a64',
        color: '#fff',
      });

      expect(secondaryMedium).toHaveStyle({
        'background-color': '#455a64',
        color: '#fff',
      });

      expect(secondaryLarge).toHaveStyle({
        'background-color': '#455a64',
        color: '#fff',
      });
    });

    it('should render the "danger" color', () => {
      render(
        <Button color="danger" size="sm">
          Danger Small
        </Button>
      );

      const dangerSmall = screen.getByRole('button', {
        name: /danger small/i,
      });

      render(
        <Button color="danger" size="md">
          Danger Medium
        </Button>
      );

      const dangerMedium = screen.getByRole('button', {
        name: /danger medium/i,
      });

      render(
        <Button color="danger" size="lg">
          Danger Large
        </Button>
      );

      const dangerLarge = screen.getByRole('button', {
        name: /danger large/i,
      });

      expect(dangerSmall).toHaveStyle({
        'background-color': '#d32f2f',
        color: '#fff',
      });

      expect(dangerMedium).toHaveStyle({
        'background-color': '#d32f2f',
        color: '#fff',
      });

      expect(dangerLarge).toHaveStyle({
        'background-color': '#d32f2f',
        color: '#fff',
      });
    });

    it('should disable the box shadow', () => {
      render(<Button disableShadow>Button</Button>);
      render(<Button disableShadow>Default Disabled Shadow</Button>);

      const defaultDisabledShadow = screen.getByRole('button', {
        name: /default disabled shadow/i,
      });

      render(
        <Button disableShadow color="primary">
          Primary Disabled Shadow
        </Button>
      );

      const primaryDisabledShadow = screen.getByRole('button', {
        name: /primary disabled shadow/i,
      });

      render(
        <Button disableShadow color="secondary">
          Secondary Disabled Shadow
        </Button>
      );

      const secondaryDisabledShadow = screen.getByRole('button', {
        name: /secondary disabled shadow/i,
      });

      render(
        <Button disableShadow color="danger">
          Danger Disabled Shadow
        </Button>
      );

      const dangerDisabledShadow = screen.getByRole('button', {
        name: /danger disabled shadow/i,
      });

      expect(defaultDisabledShadow).not.toHaveStyleRule('box-shadow');
      expect(primaryDisabledShadow).not.toHaveStyleRule('box-shadow');
      expect(secondaryDisabledShadow).not.toHaveStyleRule('box-shadow');
      expect(dangerDisabledShadow).not.toHaveStyleRule('box-shadow');
    });

    it('should be disabled', () => {
      render(<Button disabled>Default Disabled</Button>);

      const defaultDisabled = screen.getByRole('button', {
        name: /default disabled/i,
      });

      render(
        <Button disabled color="primary">
          Primary Disabled
        </Button>
      );

      const primaryDisabled = screen.getByRole('button', {
        name: /primary disabled/i,
      });

      render(
        <Button disabled color="secondary">
          Secondary Disabled
        </Button>
      );

      const secondaryDisabled = screen.getByRole('button', {
        name: /secondary disabled/i,
      });

      render(
        <Button disabled color="danger">
          Danger Disabled
        </Button>
      );

      const dangerDisabled = screen.getByRole('button', {
        name: /danger disabled/i,
      });

      expect(defaultDisabled).toBeDisabled();
      expect(defaultDisabled).toHaveStyle(DISABLED_STYLE);

      expect(primaryDisabled).toBeDisabled();
      expect(primaryDisabled).toHaveStyle(DISABLED_STYLE);

      expect(secondaryDisabled).toBeDisabled();
      expect(secondaryDisabled).toHaveStyle(DISABLED_STYLE);

      expect(dangerDisabled).toBeDisabled();
      expect(dangerDisabled).toHaveStyle(DISABLED_STYLE);
    });

    it('should be focused', () => {
      render(<Button>Default Focused</Button>);

      const defaultFocused = screen.getByRole('button', {
        name: /default focused/i,
      });

      render(<Button color="primary">Primary Focused</Button>);

      const primaryFocused = screen.getByRole('button', {
        name: /primary focused/i,
      });

      render(<Button color="secondary">Secondary Focused</Button>);

      const secondaryFocused = screen.getByRole('button', {
        name: /secondary focused/i,
      });

      render(<Button color="danger">Danger Focused</Button>);

      const dangerFocused = screen.getByRole('button', {
        name: /danger focused/i,
      });

      defaultFocused.focus();

      expect(defaultFocused).toHaveFocus();
      expect(defaultFocused).toHaveStyleRule('background-color', '#aeaeae', {
        modifier: ':focus',
      });

      primaryFocused.focus();

      expect(primaryFocused).toHaveFocus();
      expect(primaryFocused).toHaveStyleRule('background-color', '#0039cb', {
        modifier: ':focus',
      });

      secondaryFocused.focus();

      expect(secondaryFocused).toHaveFocus();
      expect(secondaryFocused).toHaveStyleRule('background-color', '#1c313a', {
        modifier: ':focus',
      });

      dangerFocused.focus();

      expect(dangerFocused).toHaveFocus();
      expect(dangerFocused).toHaveStyleRule('background-color', '#9a0007', {
        modifier: ':focus',
      });
    });

    it('should be hovered', () => {
      render(<Button>Default Hovered</Button>);

      const defaultHovered = screen.getByRole('button', {
        name: /default hovered/i,
      });

      render(<Button color="primary">Primary Hovered</Button>);

      const primaryHovered = screen.getByRole('button', {
        name: /primary hovered/i,
      });

      render(<Button color="secondary">Secondary Hovered</Button>);

      const secondaryHovered = screen.getByRole('button', {
        name: /secondary hovered/i,
      });

      render(<Button color="danger">Danger Hovered</Button>);

      const dangerHovered = screen.getByRole('button', {
        name: /danger hovered/i,
      });

      expect(defaultHovered).toHaveStyleRule('background-color', '#aeaeae', {
        modifier: ':hover',
      });

      expect(primaryHovered).toHaveStyleRule('background-color', '#0039cb', {
        modifier: ':focus',
      });

      expect(secondaryHovered).toHaveStyleRule('background-color', '#1c313a', {
        modifier: ':focus',
      });

      expect(dangerHovered).toHaveStyleRule('background-color', '#9a0007', {
        modifier: ':focus',
      });
    });
  });

  describe('"outline" type', () => {
    it('should be styled correctly', () => {
      render(<Button variant="outline">Outline</Button>);

      expect(screen.getByRole('button', { name: /outline/i })).toHaveStyle({
        'background-color': '#fff',
        'border-color': '#2962ff',
        color: '#2962ff',
      });
    });

    it('should render the "sm" size', () => {
      render(
        <Button size="sm" variant="outline">
          Small
        </Button>
      );

      expect(screen.getByRole('button', { name: /small/i })).toHaveStyle({
        padding: '0.6rem 1.2rem',
      });
    });

    it('should render the "md" size', () => {
      render(
        <Button size="md" variant="outline">
          Medium
        </Button>
      );

      expect(screen.getByRole('button', { name: /medium/i })).toHaveStyle({
        padding: '0.8rem 1.6rem',
      });
    });

    it('should render the "lg" size', () => {
      render(
        <Button size="lg" variant="outline">
          Large
        </Button>
      );

      expect(screen.getByRole('button', { name: /large/i })).toHaveStyle({
        padding: '1.1rem 2.2rem',
      });
    });

    it('should be disabled', () => {
      render(
        <Button disabled variant="outline">
          Disabled
        </Button>
      );

      const button = screen.getByRole('button', { name: /disabled/i });

      expect(button).toBeDisabled();
      expect(button).toHaveStyle(DISABLED_STYLE);
    });

    it('should be focused', () => {
      render(<Button variant="outline">Outline Focused</Button>);

      const outlineFocused = screen.getByRole('button', {
        name: /outline focused/i,
      });

      outlineFocused.focus();

      expect(outlineFocused).toHaveFocus();
      expect(outlineFocused).toHaveStyleRule(
        'background-color',
        'rgba(41,98,255,0.1)',
        { modifier: ':focus' }
      );
    });

    it('should be hovered', () => {
      render(<Button variant="outline">Hovered</Button>);

      expect(screen.getByRole('button', { name: /hovered/i })).toHaveStyleRule(
        'background-color',
        'rgba(41,98,255,0.1)',
        {
          modifier: ':hover',
        }
      );
    });
  });

  describe('"text" type', () => {
    it('should be styled correctly', () => {
      render(<Button variant="text">Text</Button>);

      expect(screen.getByRole('button', { name: /text/i })).toHaveStyle({
        'background-color': 'transparent',
        'border-color': 'transparent',
        color: '#2962FF',
      });
    });

    it('should render the "sm" size', () => {
      render(
        <Button size="sm" variant="text">
          Small
        </Button>
      );

      expect(screen.getByRole('button', { name: /small/i })).toHaveStyle({
        padding: '0.6rem 1.2rem',
      });
    });

    it('should render the "md" size', () => {
      render(
        <Button size="md" variant="text">
          Medium
        </Button>
      );

      expect(screen.getByRole('button', { name: /medium/i })).toHaveStyle({
        padding: '0.8rem 1.6rem',
      });
    });

    it('should render the "lg" size', () => {
      render(
        <Button size="lg" variant="text">
          Large
        </Button>
      );

      expect(screen.getByRole('button', { name: /large/i })).toHaveStyle({
        padding: '1.1rem 2.2rem',
      });
    });

    it('should be disabled', () => {
      render(
        <Button disabled variant="text">
          Disabled
        </Button>
      );

      const button = screen.getByRole('button', { name: /disabled/i });

      expect(button).toBeDisabled();
      expect(button).toHaveStyle({
        'background-color': '#fff',
        'border-color': 'transparent',
        color: '#9e9e9e',
        cursor: 'not-allowed',
      });
    });

    it('should be focused', () => {
      render(<Button variant="text">Text Focused</Button>);

      const textFocused = screen.getByRole('button', {
        name: /text focused/i,
      });

      textFocused.focus();

      expect(textFocused).toHaveFocus();
      expect(textFocused).toHaveStyleRule(
        'background-color',
        'rgba(41,98,255,0.1)',
        { modifier: ':focus' }
      );
    });

    it('should be hovered', () => {
      render(<Button variant="text">Hovered</Button>);

      expect(screen.getByRole('button', { name: /hovered/i })).toHaveStyleRule(
        'background-color',
        'rgba(41,98,255,0.1)',
        {
          modifier: ':hover',
        }
      );
    });
  });
});
