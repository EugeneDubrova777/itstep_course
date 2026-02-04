export default function Button({type, handleClick}) {
  return (
    <button type={type} className="btn" onClick={handleClick}>
      ADD
    </button>
  )
}