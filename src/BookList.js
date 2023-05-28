import Book from './Book';
import { books } from './books';

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
};
export default BookList;
