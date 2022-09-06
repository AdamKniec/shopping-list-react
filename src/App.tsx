/* eslint-disable import/extensions */
import { Formik } from "formik";
import { ProductNameField } from "form-kit/ProductNameField/ProductNameField.component";
import { CustomButton } from "ui-kit";

interface ProductFormValues {
  product: string;
}

const initialValues: ProductFormValues = {
  product: "",
};

const App = () => {
  const handleAddProduct = () => {
    console.log("Product form has been submitted!");
    return;
  };

  return (
    <div className="App">
      <Formik<ProductFormValues>
        onSubmit={handleAddProduct}
        initialValues={initialValues}
      >
        <>
          <ProductNameField />
          <CustomButton />
        </>
      </Formik>
    </div>
  );
};

export default App;
