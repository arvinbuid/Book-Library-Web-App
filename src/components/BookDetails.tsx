import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import coverImg from "../assets/cover-not-available.jpg";
import {useQuery} from "@tanstack/react-query";
import {ArrowLeftCircleIcon} from "@heroicons/react/16/solid";

const URL = "https://openlibrary.org/works/";

interface NewBook {
  description?: string;
  title: string;
  covers?: string;
  subject_places?: string;
  subject_times?: string;
  subjects?: string;
}

function BookDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<NewBook | null>(null);

  // fetch single book information
  const getBookDetails = async () => {
    try {
      const response = await fetch(`${URL}${id}.json`);
      if (!response.ok) {
        throw new Error("There was an error parsing your data.");
      }
      const data = await response.json();

      if (data) {
        const {description, title, covers, subject_places, subject_times, subjects} = data;

        const newBook: NewBook = {
          description:
            typeof description === "string"
              ? description
              : description?.value || "No description found.",
          title: title,
          covers:
            covers && covers.length > 0
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
          subject_places: subject_places ? subject_places.join(", ") : "No subject places found.",
          subject_times: subject_times ? subject_times.join(", ") : "No subject times found.",
          subjects: subjects ? subjects.join(", ") : "No subject found.",
        };

        return newBook;
      } else {
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const {data} = useQuery({
    queryKey: ["singleBook", id],
    queryFn: getBookDetails,
  });

  useEffect(() => {
    if (data) {
      setBook(data);
    }

    console.log(book);
  }, [data]);

  const goPrevious = () => {
    navigate("..", {relative: "path"});
  };

  return (
    <section className='w-full h-auto px-4 flex justify-center'>
      <div className='w-[80vw] h-auto my-[20px]'>
        <button className='flex items-center gap-2 px-4 py-2 w-[150px] ' onClick={goPrevious}>
          <ArrowLeftCircleIcon width={30} />
          <span className='text-2xl font-bold'>Back</span>
        </button>

        <div className='flex px-4 xs:flex-col xl:flex-row w-[90vw]'>
          {/* Book Image */}
          <div className='px-4 py-6 flex justify-center'>
            <img src={data?.covers} alt='Book Image' className='w-[300px] sm:w-[500px]' />
          </div>

          <div className='flex flex-1 flex-col px-6 mt-6 gap-3'>
            {/* Book Title */}
            <div className='mb-8'>
              <span className='text-4xl font-bold'>{data?.title}</span>
            </div>

            {/* Book Subject Places*/}
            <div>
              <span className='text-2xl font-bold'>Subject Places: </span>
              <span className='text-xl leading-4'>{data?.subject_places}</span>
            </div>

            {/* Total Editions */}
            <div>
              <span className='text-2xl font-bold'>Subject Times: </span>
              <span className='text-xl leading-4'>{data?.subject_times}</span>
            </div>

            {/* Publish Year */}
            <div>
              <span className='text-2xl font-bold'>Description: </span>
              <span className='text-xl leading-4'>{data?.description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
