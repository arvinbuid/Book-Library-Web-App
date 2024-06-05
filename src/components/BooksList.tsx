import {useBooks} from "./contexts/BooksContext";
import coverImg from "../assets/cover-not-available.jpg";
import Loading from "../Loading";
import Book from "./Book";

// https://covers.openlibrary.org/b/id/240727-S.jpg

function BooksList() {
  const {books, resultTitle, isLoading} = useBooks();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,

      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_i
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_i}-L.jpg`
        : coverImg,
    };
  });

  // check if loading
  if (isLoading)
    return (
      <div className='w-full flex justify-center items-center h-[100vh]'>
        <Loading />
      </div>
    );
  return (
    <>
      <section>
        <div>
          <h2>{resultTitle}</h2>
        </div>
        <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 py-6 gap-6'>
          {booksWithCovers.slice(0, 30).map((item, index) => (
            <Book key={index} {...item}></Book>
          ))}
        </div>
      </section>
    </>
  );
}

export default BooksList;
