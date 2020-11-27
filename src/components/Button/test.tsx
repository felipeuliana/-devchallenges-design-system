import React from 'react';
import Button from '.';
import { render, screen } from '@testing-library/react';
import { InsertEmoticon } from '@styled-icons/material';

const DISABLED_STYLE = {
  'background-color': '#e0e0e0',
  'border-color': 'transparent',
  color: '#9e9e9e',
  'pointer-events': 'none',
};

describe('<Button />', () => {
  it('should render correctly', () => {
    render(
      <Button
        color="primary"
        size="lg"
        leftIcon={<InsertEmoticon title="Emoticon" />}
      >
        Emoticon
      </Button>
    );

    expect(screen.getByRole('button', { name: /emoticon/i })).toMatchSnapshot();

    render(
      <Button as="a" href="/link" size="sm" variant="text">
        Link
      </Button>
    );

    expect(screen.getByRole('link', { name: /link/i })).toMatchSnapshot();
  });

  it('should allow access to button attributes', () => {
    render(
      <Button disabled name="Default" value="Default">
        Default
      </Button>
    );

    const defaultButton = screen.getByRole('button', { name: /default/i });

    expect(defaultButton).toHaveAttribute('disabled');
    expect(defaultButton).toHaveAttribute('name');
    expect(defaultButton).toHaveAttribute('value');
  });

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

    it('should display an icon', () => {
      render(<Button children={<InsertEmoticon title="Emoticon" />} />);

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should display an icon on the left', () => {
      render(
        <Button leftIcon={<InsertEmoticon title="Emoticon" />}>
          Left Icon
        </Button>
      );

      const withLeftIcon = screen.getByRole('img');

      expect(withLeftIcon).toBeInTheDocument();
      expect(withLeftIcon).toHaveStyle({ 'margin-right': '0.5rem' });
    });

    it('should display an icon on the right', () => {
      render(
        <Button rightIcon={<InsertEmoticon title="Emoticon" />}>
          Right Icon
        </Button>
      );

      const withRightIcon = screen.getByRole('img');

      expect(withRightIcon).toBeInTheDocument();
      expect(withRightIcon).toHaveStyle({ 'margin-left': '0.5rem' });
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

    it('should display an icon', () => {
      render(
        <Button
          children={<InsertEmoticon title="Emoticon" />}
          variant="outline"
        />
      );

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should display an icon on the left', () => {
      render(
        <Button
          variant="outline"
          leftIcon={<InsertEmoticon title="Emoticon" />}
        >
          Left Icon
        </Button>
      );

      const withLeftIcon = screen.getByRole('img');

      expect(withLeftIcon).toBeInTheDocument();
      expect(withLeftIcon).toHaveStyle({ 'margin-right': '0.5rem' });
    });

    it('should display an icon on the right', () => {
      render(
        <Button
          rightIcon={<InsertEmoticon title="Emoticon" />}
          variant="outline"
        >
          Right Icon
        </Button>
      );

      const withRightIcon = screen.getByRole('img');

      expect(withRightIcon).toBeInTheDocument();
      expect(withRightIcon).toHaveStyle({ 'margin-left': '0.5rem' });
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
        'pointer-events': 'none',
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

    it('should display an icon', () => {
      render(
        <Button children={<InsertEmoticon title="Emoticon" />} variant="text" />
      );

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should display an icon on the left', () => {
      render(
        <Button leftIcon={<InsertEmoticon title="Emoticon" />} variant="text">
          Left Icon
        </Button>
      );

      const withLeftIcon = screen.getByRole('img');

      expect(withLeftIcon).toBeInTheDocument();
      expect(withLeftIcon).toHaveStyle({ 'margin-right': '0.5rem' });
    });

    it('should display an icon on the right', () => {
      render(
        <Button rightIcon={<InsertEmoticon title="Emoticon" />} variant="text">
          Right Icon
        </Button>
      );

      const withRightIcon = screen.getByRole('img');

      expect(withRightIcon).toBeInTheDocument();
      expect(withRightIcon).toHaveStyle({ 'margin-left': '0.5rem' });
    });
  });

  describe('"link" type', () => {
    it('should be styled correctly', () => {
      render(
        <Button as="a" href="/link">
          Link
        </Button>
      );

      const link = screen.getByRole('link', { name: /link/i });

      expect(link).toHaveAttribute('href', '/link');
      expect(link).toHaveStyle({
        'background-color': '#e0e0e0',
        'box-shadow': '0 0.2rem 0.3rem rgba(51,51,51,0.2)',
        color: '#3f3f3f',
      });
    });

    it('should render the "sm" size', () => {
      render(
        <Button as="a" href="/link" size="sm">
          Link Small
        </Button>
      );

      const linkSmall = screen.getByRole('link', {
        name: /link small/i,
      });

      render(
        <Button as="a" href="/link" color="primary" size="sm">
          Link Primary Small
        </Button>
      );

      const linkPrimarySmall = screen.getByRole('link', {
        name: /link primary small/i,
      });

      render(
        <Button as="a" href="/link" color="secondary" size="sm">
          Link Secondary Small
        </Button>
      );

      const linkSecondarySmall = screen.getByRole('link', {
        name: /link secondary small/i,
      });

      render(
        <Button as="a" href="/link" color="danger" size="sm">
          Link Danger Small
        </Button>
      );

      const linkDangerSmall = screen.getByRole('link', {
        name: /link danger small/i,
      });

      expect(linkSmall).toHaveAttribute('href', '/link');
      expect(linkSmall).toHaveStyle({ padding: '0.6rem 1.2rem' });

      expect(linkPrimarySmall).toHaveAttribute('href', '/link');
      expect(linkPrimarySmall).toHaveStyle({ padding: '0.6rem 1.2rem' });

      expect(linkSecondarySmall).toHaveAttribute('href', '/link');
      expect(linkSecondarySmall).toHaveStyle({ padding: '0.6rem 1.2rem' });

      expect(linkDangerSmall).toHaveAttribute('href', '/link');
      expect(linkDangerSmall).toHaveStyle({ padding: '0.6rem 1.2rem' });
    });

    it('should render the "md" size', () => {
      render(
        <Button as="a" href="/link" size="md">
          Link Default Medium
        </Button>
      );

      const linkDefaultMedium = screen.getByRole('link', {
        name: /link default medium/i,
      });

      render(
        <Button as="a" href="/link" color="primary" size="md">
          Link Primary Medium
        </Button>
      );

      const linkPrimaryMedium = screen.getByRole('link', {
        name: /link primary medium/i,
      });

      render(
        <Button as="a" href="/link" color="secondary" size="md">
          Link Secondary Medium
        </Button>
      );

      const linkSecondaryMedium = screen.getByRole('link', {
        name: /link secondary medium/i,
      });

      render(
        <Button as="a" href="/link" color="danger" size="md">
          Link Danger Medium
        </Button>
      );

      const linkDangerMedium = screen.getByRole('link', {
        name: /link danger medium/i,
      });

      expect(linkDefaultMedium).toHaveAttribute('href', '/link');
      expect(linkDefaultMedium).toHaveStyle({ padding: '0.8rem 1.6rem' });

      expect(linkPrimaryMedium).toHaveAttribute('href', '/link');
      expect(linkPrimaryMedium).toHaveStyle({ padding: '0.8rem 1.6rem' });

      expect(linkSecondaryMedium).toHaveAttribute('href', '/link');
      expect(linkSecondaryMedium).toHaveStyle({ padding: '0.8rem 1.6rem' });

      expect(linkDangerMedium).toHaveAttribute('href', '/link');
      expect(linkDangerMedium).toHaveStyle({ padding: '0.8rem 1.6rem' });
    });

    it('should render the "lg" size', () => {
      render(
        <Button as="a" href="/link" size="lg">
          Link Default Large
        </Button>
      );

      const linkDefaultLarge = screen.getByRole('link', {
        name: /link default large/i,
      });

      render(
        <Button as="a" href="/link" color="primary" size="lg">
          Link Primary Large
        </Button>
      );

      const linkPrimaryLarge = screen.getByRole('link', {
        name: /link primary large/i,
      });

      render(
        <Button as="a" href="/link" color="secondary" size="lg">
          Link Secondary Large
        </Button>
      );

      const linkSecondaryLarge = screen.getByRole('link', {
        name: /link secondary large/i,
      });

      render(
        <Button as="a" href="/link" color="danger" size="lg">
          Link Danger Large
        </Button>
      );

      const linkDangerLarge = screen.getByRole('link', {
        name: /link danger large/i,
      });

      expect(linkDefaultLarge).toHaveAttribute('href', '/link');
      expect(linkDefaultLarge).toHaveStyle({ padding: '1.1rem 2.2rem' });

      expect(linkPrimaryLarge).toHaveAttribute('href', '/link');
      expect(linkPrimaryLarge).toHaveStyle({ padding: '1.1rem 2.2rem' });

      expect(linkSecondaryLarge).toHaveAttribute('href', '/link');
      expect(linkSecondaryLarge).toHaveStyle({ padding: '1.1rem 2.2rem' });

      expect(linkDangerLarge).toHaveAttribute('href', '/link');
      expect(linkDangerLarge).toHaveStyle({ padding: '1.1rem 2.2rem' });
    });

    it('should render the "primary" color', () => {
      render(
        <Button as="a" href="/link" color="primary" size="sm">
          Link Primary Small
        </Button>
      );

      const linkPrimarySmall = screen.getByRole('link', {
        name: /link primary small/i,
      });

      render(
        <Button as="a" href="/link" color="primary" size="md">
          Link Primary Medium
        </Button>
      );

      const linkPrimaryMedium = screen.getByRole('link', {
        name: /link primary medium/i,
      });

      render(
        <Button as="a" href="/link" color="primary" size="lg">
          Link Primary Large
        </Button>
      );

      const linkPrimaryLarge = screen.getByRole('link', {
        name: /link primary large/i,
      });

      expect(linkPrimarySmall).toHaveAttribute('href', '/link');
      expect(linkPrimarySmall).toHaveStyle({
        'background-color': '#2962ff',
        color: '#fff',
      });

      expect(linkPrimaryMedium).toHaveAttribute('href', '/link');
      expect(linkPrimaryMedium).toHaveStyle({
        'background-color': '#2962ff',
        color: '#fff',
      });

      expect(linkPrimaryLarge).toHaveAttribute('href', '/link');
      expect(linkPrimaryLarge).toHaveStyle({
        'background-color': '#2962ff',
        color: '#fff',
      });
    });

    it('should render the "secondary" color', () => {
      render(
        <Button as="a" href="/link" color="secondary" size="sm">
          Link Secondary Small
        </Button>
      );

      const linkSecondarySmall = screen.getByRole('link', {
        name: /link secondary small/i,
      });

      render(
        <Button as="a" href="/link" color="secondary" size="md">
          Link Secondary Medium
        </Button>
      );

      const linkSecondaryMedium = screen.getByRole('link', {
        name: /link secondary medium/i,
      });

      render(
        <Button as="a" href="/link" color="secondary" size="lg">
          Link Secondary Large
        </Button>
      );

      const linkSecondaryLarge = screen.getByRole('link', {
        name: /link secondary large/i,
      });

      expect(linkSecondarySmall).toHaveAttribute('href', '/link');
      expect(linkSecondarySmall).toHaveStyle({
        'background-color': '#455a64',
        color: '#fff',
      });

      expect(linkSecondaryMedium).toHaveAttribute('href', '/link');
      expect(linkSecondaryMedium).toHaveStyle({
        'background-color': '#455a64',
        color: '#fff',
      });

      expect(linkSecondaryLarge).toHaveAttribute('href', '/link');
      expect(linkSecondaryLarge).toHaveStyle({
        'background-color': '#455a64',
        color: '#fff',
      });
    });

    it('should render the "danger" color', () => {
      render(
        <Button as="a" href="/link" color="danger" size="sm">
          Link Danger Small
        </Button>
      );

      const linkDangerSmall = screen.getByRole('link', {
        name: /link danger small/i,
      });

      render(
        <Button as="a" href="/link" color="danger" size="md">
          Link Danger Medium
        </Button>
      );

      const linkDangerMedium = screen.getByRole('link', {
        name: /link danger medium/i,
      });

      render(
        <Button as="a" href="/link" color="danger" size="lg">
          Link Danger Large
        </Button>
      );

      const linkDangerLarge = screen.getByRole('link', {
        name: /link danger large/i,
      });

      expect(linkDangerSmall).toHaveAttribute('href', '/link');
      expect(linkDangerSmall).toHaveStyle({
        'background-color': '#d32f2f',
        color: '#fff',
      });

      expect(linkDangerMedium).toHaveAttribute('href', '/link');
      expect(linkDangerMedium).toHaveStyle({
        'background-color': '#d32f2f',
        color: '#fff',
      });

      expect(linkDangerLarge).toHaveAttribute('href', '/link');
      expect(linkDangerLarge).toHaveStyle({
        'background-color': '#d32f2f',
        color: '#fff',
      });
    });

    it('should disable the box shadow', () => {
      render(
        <Button as="a" href="/link" disableShadow>
          Link Default Disabled Shadow
        </Button>
      );

      const linkDefaultDisabledShadow = screen.getByRole('link', {
        name: /link default disabled shadow/i,
      });

      render(
        <Button as="a" href="/link" disableShadow color="primary">
          Link Primary Disabled Shadow
        </Button>
      );

      const linkPrimaryDisabledShadow = screen.getByRole('link', {
        name: /link primary disabled shadow/i,
      });

      render(
        <Button as="a" href="/link" disableShadow color="secondary">
          Link Secondary Disabled Shadow
        </Button>
      );

      const linkSecondaryDisabledShadow = screen.getByRole('link', {
        name: /link secondary disabled shadow/i,
      });

      render(
        <Button as="a" href="/link" disableShadow color="danger">
          Link Danger Disabled Shadow
        </Button>
      );

      const linkDangerDisabledShadow = screen.getByRole('link', {
        name: /link danger disabled shadow/i,
      });

      expect(linkDefaultDisabledShadow).toHaveAttribute('href', '/link');
      expect(linkDefaultDisabledShadow).not.toHaveStyleRule('box-shadow');

      expect(linkPrimaryDisabledShadow).toHaveAttribute('href', '/link');
      expect(linkPrimaryDisabledShadow).not.toHaveStyleRule('box-shadow');

      expect(linkSecondaryDisabledShadow).toHaveAttribute('href', '/link');
      expect(linkSecondaryDisabledShadow).not.toHaveStyleRule('box-shadow');

      expect(linkDangerDisabledShadow).toHaveAttribute('href', '/link');
      expect(linkDangerDisabledShadow).not.toHaveStyleRule('box-shadow');
    });

    it('should be disabled', () => {
      render(
        <Button as="a" href="/link" disabled>
          Link Default Disabled
        </Button>
      );

      const linkDefaultDisabled = screen.getByRole('link', {
        name: /link default disabled/i,
      });

      render(
        <Button as="a" href="/link" disabled color="primary">
          Link Primary Disabled
        </Button>
      );

      const linkPrimaryDisabled = screen.getByRole('link', {
        name: /link primary disabled/i,
      });

      render(
        <Button as="a" href="/link" disabled color="secondary">
          Link Secondary Disabled
        </Button>
      );

      const linkSecondaryDisabled = screen.getByRole('link', {
        name: /link secondary disabled/i,
      });

      render(
        <Button as="a" href="/link" disabled color="danger">
          Link Danger Disabled
        </Button>
      );

      const linkDangerDisabled = screen.getByRole('link', {
        name: /link danger disabled/i,
      });

      expect(linkDefaultDisabled).toHaveAttribute('href', '/link');
      expect(linkDefaultDisabled).toHaveStyle(DISABLED_STYLE);

      expect(linkPrimaryDisabled).toHaveAttribute('href', '/link');
      expect(linkPrimaryDisabled).toHaveStyle(DISABLED_STYLE);

      expect(linkSecondaryDisabled).toHaveAttribute('href', '/link');
      expect(linkSecondaryDisabled).toHaveStyle(DISABLED_STYLE);

      expect(linkDangerDisabled).toHaveAttribute('href', '/link');
      expect(linkDangerDisabled).toHaveStyle(DISABLED_STYLE);
    });

    it('should be focused', () => {
      render(
        <Button as="a" href="/link">
          Link Default Focused
        </Button>
      );

      const linkDefaultFocused = screen.getByRole('link', {
        name: /link default focused/i,
      });

      render(
        <Button as="a" href="/link" color="primary">
          Link Primary Focused
        </Button>
      );

      const linkPrimaryFocused = screen.getByRole('link', {
        name: /link primary focused/i,
      });

      render(
        <Button as="a" href="/link" color="secondary">
          Link Secondary Focused
        </Button>
      );

      const linkSecondaryFocused = screen.getByRole('link', {
        name: /link secondary focused/i,
      });

      render(
        <Button as="a" href="/link" color="danger">
          Link Danger Focused
        </Button>
      );

      const linkDangerFocused = screen.getByRole('link', {
        name: /link danger focused/i,
      });

      linkDefaultFocused.focus();

      expect(linkDefaultFocused).toHaveFocus();
      expect(linkDefaultFocused).toHaveStyleRule(
        'background-color',
        '#aeaeae',
        { modifier: ':focus' }
      );

      linkPrimaryFocused.focus();

      expect(linkPrimaryFocused).toHaveFocus();
      expect(linkPrimaryFocused).toHaveStyleRule(
        'background-color',
        '#0039cb',
        { modifier: ':focus' }
      );

      linkSecondaryFocused.focus();

      expect(linkSecondaryFocused).toHaveFocus();
      expect(linkSecondaryFocused).toHaveStyleRule(
        'background-color',
        '#1c313a',
        { modifier: ':focus' }
      );

      linkDangerFocused.focus();

      expect(linkDangerFocused).toHaveFocus();
      expect(linkDangerFocused).toHaveStyleRule('background-color', '#9a0007', {
        modifier: ':focus',
      });
    });

    it('should be hovered', () => {
      render(
        <Button as="a" href="/link">
          Link Default Hovered
        </Button>
      );

      const linkDefaultHovered = screen.getByRole('link', {
        name: /link default hovered/i,
      });

      render(
        <Button as="a" href="/link" color="primary">
          Link Primary Hovered
        </Button>
      );

      const linkPrimaryHovered = screen.getByRole('link', {
        name: /link primary hovered/i,
      });

      render(
        <Button as="a" href="/link" color="secondary">
          Link Secondary Hovered
        </Button>
      );

      const linkSecondaryHovered = screen.getByRole('link', {
        name: /link secondary hovered/i,
      });

      render(
        <Button as="a" href="/link" color="danger">
          Link Danger Hovered
        </Button>
      );

      const linkDangerHovered = screen.getByRole('link', {
        name: /link danger hovered/i,
      });

      expect(linkDefaultHovered).toHaveAttribute('href', '/link');
      expect(linkDefaultHovered).toHaveStyleRule(
        'background-color',
        '#aeaeae',
        { modifier: ':hover' }
      );

      expect(linkPrimaryHovered).toHaveAttribute('href', '/link');
      expect(linkPrimaryHovered).toHaveStyleRule(
        'background-color',
        '#0039cb',
        { modifier: ':hover' }
      );

      expect(linkSecondaryHovered).toHaveAttribute('href', '/link');
      expect(linkSecondaryHovered).toHaveStyleRule(
        'background-color',
        '#1c313a',
        { modifier: ':hover' }
      );

      expect(linkDangerHovered).toHaveAttribute('href', '/link');
      expect(linkDangerHovered).toHaveStyleRule('background-color', '#9a0007', {
        modifier: ':hover',
      });
    });

    it('should be rendered as an "outline" variant', () => {
      render(
        <Button as="a" href="/link" variant="outline">
          Link
        </Button>
      );

      const link = screen.getByRole('link', { name: /link/i });

      expect(link).toBeInTheDocument();
      expect(link).toHaveStyle({
        'background-color': '#fff',
        'border-color': '#2962ff',
        color: '#2962ff',
      });
    });

    it('should be rendered as a "text" variant', () => {
      render(
        <Button as="a" href="/link" variant="text">
          Link
        </Button>
      );

      const link = screen.getByRole('link', { name: /link/i });

      expect(link).toBeInTheDocument();
      expect(link).toHaveStyle({
        'background-color': 'transparent',
        'border-color': 'transparent',
        color: '#2962FF',
      });
    });

    it('should display an icon', () => {
      render(
        <Button
          as="a"
          href="/link"
          children={<InsertEmoticon title="Emoticon" />}
        />
      );

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should display an icon on the left', () => {
      render(
        <Button
          as="a"
          href="/link"
          leftIcon={<InsertEmoticon title="Emoticon" />}
        >
          Left Icon
        </Button>
      );

      const withLeftIcon = screen.getByRole('img');

      expect(withLeftIcon).toBeInTheDocument();
      expect(withLeftIcon).toHaveStyle({ 'margin-right': '0.5rem' });
    });

    it('should display an icon on the right', () => {
      render(
        <Button
          as="a"
          href="/link"
          rightIcon={<InsertEmoticon title="Emoticon" />}
        >
          Right Icon
        </Button>
      );

      const withRightIcon = screen.getByRole('img');

      expect(withRightIcon).toBeInTheDocument();
      expect(withRightIcon).toHaveStyle({ 'margin-left': '0.5rem' });
    });
  });
});
