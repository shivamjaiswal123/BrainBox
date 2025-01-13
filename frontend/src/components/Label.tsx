interface LabelProps {
  label: string;
}

function Label({ label }: LabelProps) {
  return (
    <label className="block text-sm tracking-wider font-medium text-gray-700 w-28 text-end select-none">
      {label}
    </label>
  );
}

export default Label;
