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
    const { container } = render(
      <>
        <Button
          color="primary"
          size="lg"
          leftIcon={<InsertEmoticon title="Emoticon" />}
        >
          Emoticon
        </Button>
        <Button as="a" href="/link" size="sm" variant="text">
          Link
        </Button>
      </>
    );

    expect(container).toMatchSnapshot();
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

    it('should be disabled', () => {
      render(<Button disabled>Default Disabled</Button>);

      const defaultDisabled = screen.getByRole('button', {
        name: /default disabled/i,
      });

      expect(defaultDisabled).toBeDisabled();
      expect(defaultDisabled).toHaveStyle(DISABLED_STYLE);
    });

    it('should be focused', () => {
      render(<Button>Default Focused</Button>);

      const defaultFocused = screen.getByRole('button', {
        name: /default focused/i,
      });

      defaultFocused.focus();

      expect(defaultFocused).toHaveFocus();
      expect(defaultFocused).toHaveStyleRule('background-color', '#aeaeae', {
        modifier: ':focus',
      });
    });

    it('should be hovered', () => {
      render(<Button>Default Hovered</Button>);

      expect(
        screen.getByRole('button', { name: /default hovered/i })
      ).toHaveStyleRule('background-color', '#aeaeae', {
        modifier: ':hover',
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
  });

  describe('"link" type', () => {
    it('should be rendered as an "default" variant', () => {
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
          Text
        </Button>
      );

      const link = screen.getByRole('link', { name: /text/i });

      expect(link).toBeInTheDocument();
      expect(link).toHaveStyle({
        'background-color': 'transparent',
        'border-color': 'transparent',
        color: '#2962FF',
      });
    });

    it('should be disabled', () => {
      render(
        <Button as="a" href="/link" disabled>
          Disabled
        </Button>
      );

      const linkDefaultDisabled = screen.getByRole('link', {
        name: /disabled/i,
      });

      expect(linkDefaultDisabled).toHaveAttribute('href', '/link');
      expect(linkDefaultDisabled).toHaveStyle(DISABLED_STYLE);
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

      linkDefaultFocused.focus();

      expect(linkDefaultFocused).toHaveFocus();
      expect(linkDefaultFocused).toHaveStyleRule(
        'background-color',
        '#aeaeae',
        { modifier: ':focus' }
      );
    });

    it('should be hovered', () => {
      render(
        <Button as="a" href="/link">
          Hovered
        </Button>
      );

      const linkDefaultHovered = screen.getByRole('link', {
        name: /hovered/i,
      });

      expect(linkDefaultHovered).toHaveAttribute('href', '/link');
      expect(linkDefaultHovered).toHaveStyleRule(
        'background-color',
        '#aeaeae',
        { modifier: ':hover' }
      );
    });
  });
});
