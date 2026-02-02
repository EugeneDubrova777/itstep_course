import {loremIpsum} from 'lorem-ipsum';

export default function Catalog() {
  return (
    <>
    <h1>Catalog</h1>
    <p>{loremIpsum({count: 12})}</p>
    </>
  )
}