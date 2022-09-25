import { Form, Formik } from "formik";
import { ProductNameField } from "form-kit/ProductNameField/ProductNameField.component";
import { CustomButton } from "ui-kit";
import { ProductList } from "components/ProductList/ProductList.component";

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
        <Form>
          <ProductNameField />
          <CustomButton />
        </Form>
      </Formik>
      <ProductList />
    </div>
  );
};

export default App;
