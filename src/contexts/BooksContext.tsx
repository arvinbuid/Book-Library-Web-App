import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {useQuery} from "@tanstack/react-query";

const URL = "https://openlibrary.org/search.json?title=";

export interface Book {
  id: string;
  author_name?: string[];
  cover_i?: number;
  edition_count?: number;
  first_publish_year?: number;
  title: string;
}

export interface BooksContextType {
  isLoading: boolean;
  books: Book[];
  searchTerm: string;
  resultTitle: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setResultTitle: Dispatch<SetStateAction<string>>;
}

// props
interface BooksProviderProps {
  children: ReactNode;
}

// context
const BooksContext = createContext<BooksContextType | undefined>(undefined);

// fetch books function
const fetchBooks = async (searchTerm: any) => {
  const response = await fetch(`${URL}${searchTerm}`);
  const data = await response.json();
  const {docs} = data;
  // console.log(docs);

  // check if data.docs is available
  if (docs) {
    const booksData = docs.map((doc: any) => {
      const {key, author_name, cover_i, edition_count, first_publish_year, title} = doc;

      return {
        id: key,
        author_name: author_name,
        cover_i: cover_i,
        edition_count: edition_count,
        first_publish_year: first_publish_year,
        title: title,
      };
    });
    return booksData;
  } else {
    return [];
  }
};

// component
const BooksProvider: React.FC<BooksProviderProps> = ({children}) => {
  const [searchTerm, setSearchTerm] = useState("The Lord of the Rings");
  const [resultTitle, setResultTitle] = useState("");

  const {
    data: books = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["books", searchTerm],
    queryFn: () => fetchBooks(searchTerm),
  });

  // useEffect(() => {
  //   if (books.length > 0) {
  //     setResultTitle(`Results for "${searchTerm}".`);
  //   } else if (!isLoading) {
  //     setResultTitle("No Result Search Found.");
  //   }
  // }, [books, searchTerm, isLoading]);

  // display message if error
  if (error) {
    return <h1 className='text-4xl text-red font-bold'>There was an error fetching the data.</h1>;
  }

  return (
    <BooksContext.Provider
      value={{
        isLoading,
        books,
        searchTerm,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

// custom hook for BookContext
const useBooks = (): BooksContextType => {
  const context = useContext(BooksContext);
  if (context === undefined) {
    throw new Error("useBooks must be used within a BooksProvider.");
  }
  return context;
};

export {useBooks, BooksProvider};
