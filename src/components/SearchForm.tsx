import {MagnifyingGlassCircleIcon} from "@heroicons/react/24/solid"; // Ensure correct path
import {useBooks} from "../contexts/BooksContext";
import {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";

function SearchForm() {
  const {setSearchTerm, setResultTitle} = useBooks(); // Call useBooks as a function
  const searchText = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText.current) {
      searchText.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tempSearchTerm = searchText.current?.value.trim() ?? "";

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something...");
    } else {
      setSearchTerm(tempSearchTerm);
    }

    navigate("/");
  };

  return (
    <div>
      <form className='flex relative' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search book...'
          className='xs:w-[350px] sm:w-[650px] px-4 py-4 text-xl rounded-full'
          ref={searchText}
        />
        <button type='submit' className='absolute right-2 top-4'>
          <MagnifyingGlassCircleIcon width={30} />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
