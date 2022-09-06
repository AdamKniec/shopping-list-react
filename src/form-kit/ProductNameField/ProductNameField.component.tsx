import { Field } from "formik";
import { AdapterInput } from "form-kit/Adapters/AdapterInput.component";

// TODO We are going to add the field validation rules here

export const ProductNameField = () => {
  return (
    <Field name="product" label="Nazwa produktu" component={AdapterInput} />
  );
};
