import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg',
      title:
        'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
      author: 'James Clear',
      alt: 'Atomic Habbits',
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41F8JcJ4KuL.jpg',
      title: 'Lessons in Chemistry: A Novel',
      author: 'Bonnie Garmus',
      alt: 'Lessons in Chemistry: A Novel',
    },
  ];

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};
export default BookList;
