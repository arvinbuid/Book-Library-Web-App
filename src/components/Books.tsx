import {BooksProvider} from "../contexts/BooksContext";

function Books() {
  return (
    <>
      <BooksProvider>
        <div>
          <p className='text-3xl text-black font-bold'>Books</p>
        </div>
      </BooksProvider>
    </>
  );
}

export default Books;
