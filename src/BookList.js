import Book from './Book';

const BookList = () => {
  const firstBook = {
    img: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    alt: 'Atomic Habbits',
  };

  const secondBook = {
    img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41F8JcJ4KuL.jpg',
    title: 'Lessons in Chemistry: A Novel',
    author: 'Bonnie Garmus',
    alt: 'Lessons in Chemistry: A Novel',
  };

  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        alt={firstBook.alt}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        alt={secondBook.alt}
      />
    </section>
  );
};
export default BookList;
