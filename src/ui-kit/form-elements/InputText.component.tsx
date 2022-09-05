import { TextField } from "@mui/material";

interface InputTextProps {
  label: string;
  value: string;
  name: string;
  onChange: () => void;
}

export const InputText = (props: InputTextProps) => {
  const { label, name, onChange, value } = props;

  return (
    <TextField
      label={label}
      name={name}
      onChange={onChange}
      value={value}
      size="small"
    />
  );
};
