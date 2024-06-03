import {Link} from "react-router-dom";
import {joinAuthorWithComma} from "../helpers";

function Book(book: any) {
  return (
    <>
      <section className='w-full h-auto flex justify-center shadow-lg'>
        <div className='flex flex-col items-center gap-2 px-12 pb-8'>
          {/* Book Image*/}
          <img src={book.cover_img} alt='Book Image' className='max-w-[280px] h-[450px] mb-6' />

          {/* Book Title */}
          <Link to={`/book/${book.id}`} {...book}>
            <div>
              <span className='text-xl font-bold'>{book.title}</span>
            </div>
          </Link>

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
