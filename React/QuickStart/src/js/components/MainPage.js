import Button from "./Button";

function List() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  let listItems = products.map(product =>
    <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'green'}}>
      {product.title}
    </li>
  );

  return (<ul>{listItems}</ul>);
}

function MainPage() {
  let content = {
    title: 'Main',
    text: 'This is main page!',
    text2: 'Are you agree?'
  }

  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.text}<br />{content.text2}</p>
      <Button />
      <List />
    </>
  );
}

export default MainPage;