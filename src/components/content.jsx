function Content({ title, description }) {
  return (
    <div className="content">
      <h1 className="content__title">{title}</h1>
      <p className="content__description">{description}</p>
    </div>
  );
}

export default Content;
