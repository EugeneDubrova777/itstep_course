import {loremIpsum} from 'lorem-ipsum';
import { Outlet } from 'react-router-dom';

export default function Portfolio() {
  return (
    <>
    <h1>Portfolio</h1>
    <p>{loremIpsum({count: 25})}</p>
    <Outlet />
    </>
  )
}