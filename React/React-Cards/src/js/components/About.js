import {loremIpsum} from 'lorem-ipsum';

export default function About() {
  return (
    <p className="card-about">
      {loremIpsum({count: 1})}
    </p>
  )
}