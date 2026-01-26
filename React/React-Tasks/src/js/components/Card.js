function Card({title, image, children}) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <img src={image.src} alt={image.alt} />
      <p>{children}</p>
    </div>
  );
}

export default Card;