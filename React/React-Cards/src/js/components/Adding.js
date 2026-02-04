import Header from "./Header";
import Input from "./Input";
import Button from "./Button";

export default function Adding() {
  return (
    <div className="adding">
      <Header headerText="Add Product" />
      <Input name="products" id="product-name" type="text" placeholder="enter product name" />
      <Input name="products" id="product-info" type="text" placeholder="enter product information" />
      <Input name="products" id="product-img" type="text" placeholder="enter img link" />
      <Input name="products" id="product-cost" type="text" placeholder="enter cost" />
      <Input name="products" id="product-cost-d" type="text" placeholder="enter discount cost" />
      <Button type="submit" handleClick={() => console.log('click')} />
    </div>
  )
}