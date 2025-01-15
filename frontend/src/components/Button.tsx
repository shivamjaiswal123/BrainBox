import { ReactElement } from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  title: string;
  startIcon?: ReactElement;
  onClick?: () => void;
}

const buttonVariant = {
  primary: 'bg-black text-white',
  secondary: 'bg-white text-black border hover:bg-gray-50 duration-300',
};

const defaultStyle =
  'text-sm font-medium px-3 py-2 rounded-md flex items-center gap-2 tracking-wide';

function Button({ variant, title, startIcon, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${buttonVariant[variant]} ${defaultStyle}`}
    >
      {startIcon}
      {title}
    </button>
  );
}

export default Button;
