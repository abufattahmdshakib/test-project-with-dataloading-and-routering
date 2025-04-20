import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({ singlBook }) => {
  console.log(singlBook);
  const {bookId, bookName, author, image, rating, category, tags,} = singlBook;

  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 my-8  mx-auto w-66 shadow-xl ">
          <figure className=' mx-auto w-full h-80 bg-gray-200'>
            <img
              className=' mx-5 shadow-sm bg-base-100 w-72 h-72' src={image}
              alt="" />
          </figure>
          <div className="my-4">
            <div className='flex gap-8 justify-around mx-auto'>
              {
                tags.map(tag => <button>{tag}</button>)
              }
            </div>
            <h2 className="card-title ml-2 text-xl">{bookName}</h2>
            <h1 className='text-md ml-2 font-semibold'>By: {author}</h1>
            <div className="card-actions justify-around border-gray-300 border-dashed border-t-2  mt-2">
              <div className="badge mt-2">{category}</div>
              <div className="badge mt-2">
                <h4>{rating} </h4>
                <h4> <FaStar /></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;