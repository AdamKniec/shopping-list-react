import { List } from "ui-kit";

export const ProductList = () => {
  const sampleData = [
    {
      id: 1,
      productName: "Produkt 1 ",
    },
    {
      id: 2,
      productName: "Produkt 2 ",
    },
    {
      id: 3,
      productName: "Produkt 3 ",
    },
    {
      id: 4,
      productName: "Produkt 4 ",
    },
    {
      id: 5,
      productName: "Produkt 5 ",
    },
  ];

  // TODO -> we will probably pass the delete action here
  return <List listItems={sampleData} />;
};
