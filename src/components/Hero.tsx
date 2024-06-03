import {Link} from "react-router-dom";
import SearchForm from "./SearchForm";

function Hero() {
  return (
    <section className='bg-hero h-[630px] bg-no-repeat bg-cover bg-center py-24'>
      <div className='container xs:mx-2 md:mx-auto px-4 flex h-full xs:max-w-[500px] md:max-w-[750px] backdrop-brightness-75 '>
        {/* text */}
        <div className='flex flex-1 flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold uppercase flex items-center text-secondary'>
            <div className='w-10 h-[2px] bg-blue-400 mr-4'></div>
            New Books
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4 xs:text-[50px] text-accent'>
            FIND THE BOOK OF YOUR <br />
            <span className='font-semibold'>CHOICE</span>
          </h1>
          <Link
            to='/'
            className='self-start uppercase font-semibold border-b-2 border-blue-400 text-secondary'
          >
            Discover More
          </Link>
          <div className='w-full flex justify-center mt-12'>
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
