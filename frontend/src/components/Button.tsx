import { ReactElement } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  title: string;
  startIcon: ReactElement;
}

const buttonVariant = {
  primary: 'bg-purple-800 text-white',
  secondary: 'bg-purple-200 text-purple-700',
};

const defaultStyle =
  'text-sm font-medium px-3 py-2 rounded-md flex items-center gap-1.5';

function Button({ variant, title, startIcon }: ButtonProps) {
  return (
    <button className={`${buttonVariant[variant]} ${defaultStyle}`}>
      {startIcon}
      {title}
    </button>
  );
}

export default Button;
