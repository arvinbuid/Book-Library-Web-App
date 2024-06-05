import {Outlet} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import {BooksProvider} from "./components/contexts/BooksContext";

function App() {
  return (
    <>
      <BooksProvider>
        <Navbar />
        <Outlet />
      </BooksProvider>
    </>
  );
}

export default App;
