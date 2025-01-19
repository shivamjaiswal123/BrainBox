interface InputProps {
  type: string;
  iRef?: React.RefObject<HTMLInputElement>;
}

function Input({ type, iRef }: InputProps) {
  return (
    <input
      type={type}
      ref={iRef}
      className="w-full p-2 border rounded-md"
      required
    />
  );
}
export default Input;
