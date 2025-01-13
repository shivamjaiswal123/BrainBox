interface InputProps {
  type: string;
}

function Input({ type }: InputProps) {
  return (
    <input type={type} className="w-full p-2 border rounded-md" required />
  );
}
export default Input;
