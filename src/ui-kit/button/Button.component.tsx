import Button from "@mui/material/Button";

interface ButtonProps {
  isLoading?: boolean;
}

export const CustomButton = (props: ButtonProps) => {
  const { isLoading } = props;

  return (
    <Button type="submit" variant="contained" size="medium">
      {isLoading ? "Sending" : "Click!"}
    </Button>
  );
};
