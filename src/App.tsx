import Books from "./components/Books";
import Hero from "./components/Hero";
import Navbar from "./components/layout/Navbar";
import {BooksProvider} from "./contexts/BooksContext";

function App() {
  return (
    <>
      <BooksProvider>
        <Navbar />
        <Hero />
        <Books />
      </BooksProvider>
    </>
  );
}

export default App;
