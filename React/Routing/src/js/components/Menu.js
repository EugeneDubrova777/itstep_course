import { NavLink } from "react-router-dom";

export default function Menu({links}) {
  let hrefs = links.map(link => {
    return (
      <NavLink to={link.path} className={({ isActive }) => (isActive ? 'active' : '')}>{link.title}</NavLink>
    )
  })
  return (
    <div className="menu">
      {hrefs}
      <NavLink to='Portfolio' className={({ isActive }) => (isActive ? 'active' : '')} >Portfolio</NavLink>
    </div>
  )
}