// models
import { ButtonProps } from './models/buttonProps';

// styles
import './button.scss';

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}:  ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
