import Button from "./Button";

export function List({items}) {
  let listItems = items.map(product =>
    <ListItem item={product} key={product.id} />
  );

  return (<ul>{listItems}</ul>);
}

export function ListItem({item}) {
  return (
    <li style={{color: item.isFruit ? 'magenta' : 'green'}}>{item.title}</li>
  )
}

function MainPage() {
  let content = {
    title: 'Main',
    text: 'This is main page!',
    text2: 'Are you agree?'
  }

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.text}<br />{content.text2}</p>
      <Button startCount={1} btnClass="btn-pink" step={1} />
      <Button startCount={20} btnClass="btn-danger" step={-1} />
      <List items={products} />
    </>
  );
}

export default MainPage;