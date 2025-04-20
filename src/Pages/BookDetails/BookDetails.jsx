import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    
    const { bookName, image } = singleBook || {};
const handleMarkAsRead = id => {
    addToStoredDB(id)
}

    return (
        <div className='pl-12 my-7'>
            <h1>{bookName}</h1>
            <img className='w-40' src={image} alt="" />
            <div className='flex gap-5'>
                <button onClick={() => handleMarkAsRead(id) } className='btn'>mark as Read</button>
                <button className='btn'> Add To WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;