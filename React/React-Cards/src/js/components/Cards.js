import Header from "./Header";
import NoCards from "./NoCards";
import CardName from "./CardName";
import CardImg from "./CardImg";
import About from "./About";
import Price from "./Price";
import PriceD from "./PriceD"


export default function Cards() {
  return (
    <div className="cards-container">
      <Header headerText="Product Catalog" />
      <NoCards />
      <div className="cards">
        <div className="card">
          <CardName />
          <CardImg />
          <About />
          <div className="prices">
            <Price price="40" />
            <PriceD price="39" />
          </div>
        </div>
      </div>
    </div>
  )
}