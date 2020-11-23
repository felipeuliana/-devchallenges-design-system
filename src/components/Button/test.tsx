import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  test.todo('should render correctly');

  it('should render default type', () => {
    render(<Button>Default</Button>);

    expect(screen.getByRole('button', { name: /default/i })).toHaveStyle({
      'background-color': '#e0e0e0',
      'box-shadow': '0 0.2rem 0.3rem rgba(51,51,51,0.2)',
      color: '#3f3f3f',
    });
  });

  it('should render outline type', () => {
    render(<Button variant="outline">Outline</Button>);

    expect(screen.getByRole('button', { name: /outline/i })).toHaveStyle({
      'background-color': '#fff',
      border: '0.1rem solid #3d5afe',
      color: '#3d5afe',
    });
  });

  it('should render text type', () => {
    render(<Button variant="text">Text</Button>);

    expect(screen.getByRole('button', { name: /text/i })).toHaveStyle({
      'background-color': '#fff',
      border: '0.1rem solid transparent',
      color: '#3d5afe',
    });
  });

  it('should disable the box shadow', () => {
    render(<Button disableShadow>Button</Button>);

    expect(screen.getByRole('button', { name: /button/i })).not.toHaveStyleRule(
      'box-shadow'
    );
  });

  it('should be disabled', () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole('button', { name: /disabled/i })).toHaveAttribute(
      'disabled'
    );
  });

  it('should render sm size', () => {
    render(<Button size="sm">Small</Button>);

    expect(screen.getByRole('button', { name: /small/i })).toHaveStyle({
      padding: '0.6rem 1.2rem',
    });
  });

  it('should render md size', () => {
    render(<Button size="md">Medium</Button>);

    expect(screen.getByRole('button', { name: /medium/i })).toHaveStyle({
      padding: '0.8rem 1.6rem',
    });
  });

  it('should render lg size', () => {
    render(<Button size="lg">Large</Button>);

    expect(screen.getByRole('button', { name: /large/i })).toHaveStyle({
      padding: '1.1rem 2.2rem',
    });
  });
});
