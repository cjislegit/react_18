const Book = () => {
  return (
    <article className='book'>
      <img
        src='https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg'
        alt='Atomic Habbits'
      />
      <h2>
        Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad
        Ones
      </h2>
      <h4
        style={{
          color: '#617d98',
          fontSize: '.75rem',
          marginTop: '.5rem',
        }}
      >
        James Clear
      </h4>
    </article>
  );
};
export default Book;
