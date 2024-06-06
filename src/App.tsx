import {Outlet} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import {BooksProvider} from "./components/contexts/BooksContext";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <BooksProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </BooksProvider>
    </>
  );
}

export default App;
