import products from "./products";
import Table from "./Table";

export default function App() {
  console.log(products);

  for (const product of products) {
    console.log(product);    
  }



  return (
    <>
      <Table />
    </>
  )
}
