const Book = (props) => {
  const { img, alt, title, author, getBook, id } = props;
  return (
    <article className='book'>
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <input type='button' value='Click' onClick={() => getBook(id)} />
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
