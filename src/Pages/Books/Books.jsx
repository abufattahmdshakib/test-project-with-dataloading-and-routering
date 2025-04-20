import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-20'>Books</h1>      
            <Suspense fallback={<span>loading......</span>}>
            <div className='grid grid-cols-3 mx-auto w-[70vw] gap-12'>
                {
                    data.map((singlBook) => <Book singlBook={singlBook} key={singlBook.bookId}></Book>)
                }
            </div>
            </Suspense>
        </div>
    );
};

export default Books;