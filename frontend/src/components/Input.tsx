interface InputProps {
  type: string;
  iRef?: React.RefObject<HTMLInputElement>;
  link?: string;
}

function Input({ type, iRef, link }: InputProps) {
  return (
    <input
      value={link}
      type={type}
      ref={iRef}
      className="w-full p-2 border rounded-md"
      required
    />
  );
}
export default Input;
