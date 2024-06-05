import {Link} from "react-router-dom";
import {joinAuthorWithComma} from "../helpers";

function Book(book: any) {
  const {id} = book;
  return (
    <>
      <section className='w-full h-auto flex justify-center shadow-lg mt-[40px]'>
        <div className='flex flex-col items-center gap-2 px-6 pb-8'>
          {/* Book Image*/}
          <Link to={`/book/${id}`} {...book}>
            <img src={book.cover_img} alt='Book Image' className='max-w-[300px] h-[450px] mb-6' />
          </Link>

          {/* Book Title */}
          <div>
            <span className='text-xl font-bold text-center'>{book.title}</span>
          </div>

          {/* Book Author*/}
          <div className='w-full text-xl text-center'>
            <span className='font-bold'>Author: </span>
            <span className='text-lg leading-3'>{joinAuthorWithComma([book.author_name])}</span>
          </div>

          {/* Total Editions */}
          <div className='w-full text-xl text-center'>
            <span className='font-bold'>Total Editions: </span>
            <span className='text-lg leading-3'>{book.edition_count}</span>
          </div>

          {/* Publish Year */}
          <div className='w-full text-xl text-center'>
            <span className='font-bold'>Year Published: </span>
            <span className='text-lg leading-3'>{book.first_publish_year}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Book;
