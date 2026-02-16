import {useState, useEffect} from 'react';
import H1 from './headers/H1';

function uid() {
  return `${Date.now}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const savedProducts = window.localStorage.getItem("tasks");
  const [products, setProducts] = useState(savedProducts ? JSON.parse(savedProducts) : []);
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [num, setNum] = useState('');

  function addNewProduct(event) {
    event.preventDefault();

    const newProducts = [
      ...products,
      {
        id: uid(),
        date: date,
        text: text,
        num: num,
      }
    ];

    setProducts(newProducts);
    setDate("");
    setText("");
    setNum();
    console.log(products);
  }

  useEffect(() => {
    window.localStorage.setItem("products", JSON.stringify(products))
  }, [products]);

  return (
    <>
    <H1 headerText="Buying List" />
    <form action="" onSubmit={addNewProduct}>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <input type="number" value={num} onChange={e => setNum(e.target.value)} />
      <button type="submit" className="button">Add</button>
    </form>
    {
      products.length > 0 ? <ul id="tasks">
      {
        products.map(product => {
          return (
          <li className="task" key={product.id}>            
            <span className="product">{product.date} {product.text} {product.num}</span>
          </li>
          )
        })
      }
    </ul> : ("No Products")
    }
    </>

  )
}