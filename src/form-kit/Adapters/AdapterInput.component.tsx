import { InputText } from "ui-kit";

interface AdapterInputProps {
  label: string;
  field: {
    name: string;
    value: string;
    onChange: () => void;
  };
}

export const AdapterInput = (props: AdapterInputProps) => {
  const { label, field } = props;

  const { name, value, onChange } = field;

  return (
    <InputText label={label} name={name} value={value} onChange={onChange} />
  );
};
