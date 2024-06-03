import BooksList from "./components/BooksList";
import Hero from "./components/Hero";
import Navbar from "./components/layout/Navbar";
import {BooksProvider} from "./contexts/BooksContext";

function App() {
  return (
    <>
      <BooksProvider>
        <Navbar />
        <Hero />
        <BooksList />
      </BooksProvider>
    </>
  );
}

export default App;
