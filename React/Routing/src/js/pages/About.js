import {loremIpsum} from 'lorem-ipsum';

export default function About() {
  return (
    <>
    <h1>About</h1>
    <p>{loremIpsum({count: 8})}</p>
    </>
  )
}