import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const URL = "https://openlibrary.org/search.json?title=";

export interface Book {
  key: string;
  author_name?: string[];
  cover_i?: number;
  edition_count?: number;
  first_publish_year?: number;
  title: string;
}

export interface BooksContextType {
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

// component
const BooksProvider: React.FC<BooksProviderProps> = ({children}) => {
  // books state
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [resultTitle, setResultTitle] = useState("");

  // fetch books
  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const {docs} = data;
      console.log(docs);

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
        setBooks(booksData);

        if (booksData.length > 0) {
          setResultTitle(`Results for "${searchTerm}".`);
        } else {
          setResultTitle("No Result Search Found.");
        }
      } else {
        setBooks([]);
        setResultTitle("No Result Search Found.");
      }
    } catch (err) {
      console.log(err);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <BooksContext.Provider
      value={{
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
