function Header({text, level}) {
  if(level == 1) {
    return <h1>{text}</h1>
  } else if (level == 2) {
    return <h2>{text}</h2>
  } else {
    return <h3>{text}</h3>
  }
}

export default Header;