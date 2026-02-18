import {useState, useEffect} from 'react';
import H1 from './headers/H1';

const START_BALANCE = 0;

function uid() {
  return `${Date.now}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const savedProducts = window.localStorage.getItem("tasks");

  let summ = savedProducts ? JSON.parse(savedProducts).reduce(function(accum, item, index){
    return accum += parseFloat(item.amount);
}, START_BALANCE) : START_BALANCE;


  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [num, setNum] = useState(0);

  const [total, setTotal] = useState(summ);
  const [finances, setFinances] = useState(savedProducts ? JSON.parse(savedProducts) : []);

  function addNewProduct(event) {
    event.preventDefault();

    const newProducts = [
      ...finances,
      {
        id: uid(),
        date: date,
        text: text,
        num: num,
      }
    ];

    setFinances(newProducts);

    let summ = newProducts.reduce(function(accum, item, index){
        return accum += parseFloat(item.num);
    }, START_BALANCE);

    setTotal(summ);
    // setProducts(newProducts);
    setDate("");
    setText("");
    setNum(0);
  }

  useEffect(() => {
    window.localStorage.setItem("products", JSON.stringify(finances))
  }, [finances]);

  return (
    <>
    <H1 headerText="Buying List" />
    <form action="" onSubmit={addNewProduct}>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <input type="number" value={num} onChange={e => setNum(e.target.value)} />
      <button type="submit" className="button">Add</button>
    </form>
    <div className="total">      
      <span className="summ">{total}</span>
    </div>
    {
      finances.length > 0 ? <ul id="tasks">
      {
        finances.map(product => {
          return (
          <li className="task" key={product.id}>            
            <span className="product">{product.date} {product.text} {product.num}</span>
          </li>
          )
        })
      }
    </ul> : <p className="no">No Products</p>
    }
    </>

  )
}