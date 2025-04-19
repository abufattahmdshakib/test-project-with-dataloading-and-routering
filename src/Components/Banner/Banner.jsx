import React from 'react';
import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className='w-[90vw] mx-auto flex justify-between items-center my-14'>
                <div>
                    <h1 className='text-6xl font-bold w-[600px] mb-8'>Books to freshen up your bookshelf</h1>
                    <button className='btn px-5 py-1 text-xl btn-ghost  bg-[#23BE0A] text-[#FFFFFF]'>View The List</button>
                </div>
                <div>
                    <img className='rounded-xl' src={bookimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;