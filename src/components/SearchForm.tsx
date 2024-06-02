import {MagnifyingGlassCircleIcon} from "@heroicons/react/16/solid";

function SearchForm() {
  return (
    <div>
      <form className='flex relative'>
        <input
          type='text'
          placeholder='Search book...'
          className='xs:w-[350px] sm:w-[650px] px-4 py-4 text-xl rounded-full'
        />
        <button type='submit' className='absolute right-2 top-4'>
          <MagnifyingGlassCircleIcon width={30} />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
