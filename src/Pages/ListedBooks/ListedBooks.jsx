import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStortedBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStortedBooks.includes(book.bookId));
        setReadList(myReadList);

    }, [])

    const handleSort = (type) => {
        setSort(type);
        if (type === "pages") {
            const sorteByPage = [...readList].sort((a,b) => a.totalPages-b.totalPages) ;
            setReadList(sorteByPage)
        }
        if (type === "ratings") {
            const sorteByrating = [...readList].sort((a,b) => a.rating-b.rating) ;
            setReadList(sorteByrating)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>pages</a></li>
                    <li><a  onClick={() => handleSort("ratings")}>rating</a></li>
                </ul>
            </details>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <div className='grid grid-cols-2 mx-auto gap-8'>
                        {
                            readList.map(readListedBooks => <Book key={readListedBooks.bookId} singlBook={readListedBooks}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;