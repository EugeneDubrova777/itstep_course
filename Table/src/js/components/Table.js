import products from "./products";
import {useState} from 'react';

export default function Table() {  
  let [items, setItems] = useState(products.slice(0, 10));

  function one() {    
    setItems(items);
  }
  function two() {
    setItems(items);
  }
  return (
    <>
      
      <table>
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>count</td>
          <td>price</td>
        </tr>
      </thead>
      <tbody>
          {
            (items.length > 0) ? items.map(item => {
              return (
                <tr>                
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.price}</td>
                </tr>
              )
            }) : null
          }
      </tbody>
    </table>
      <span onClick={one}>{'1'}</span>
      <span onClick={two}>{'2'}</span>
    </>
  )
}