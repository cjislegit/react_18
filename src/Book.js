const Book = ({ book: { img, alt, title, author } }) => {
  return (
    <article className='book'>
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
