import './AllBooks.css';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import MyRequests from '../requests/MyRequests';
import { useState } from 'react';

export default function AllBooks(props) {
  const [allBooks, setAllBooks] = useState(props.books);
  const [requests, setRequests] = useState([]);

  const runSearchHandler = (term) => {
    setAllBooks(() => {
      if (term === "") {
        return props.books;
      }

      else {
        return props.books.filter((book) => 
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.description.toLowerCase().includes(term) ||
          book.language.toLowerCase().includes(term))
      }
    });
  }


  const saveRequestHandler = (newRequest) => {
    if (requests.find(book => book.id === newRequest.id)) {
      alert("You already requested this item!");
      return
    }

    setRequests((prevRequests) => {
      return [newRequest, ...prevRequests]
    });
  };

  const deleteRequestHandler = (requestID) => {
    setRequests(() => {
      return requests.filter((obj) => obj.id !== requestID)
    });
  }

  return (
    <div className="full-page">
      <SearchBar onSearch={runSearchHandler}></SearchBar>
      
      <div className="all-books-and-requests">
        <div className="books">
          {allBooks.map((book) => (
            <BookCard key={book.id} item={book} onAddRequest={saveRequestHandler}></BookCard>
          ))}
        </div>
        <MyRequests myRequests={requests} onCancelRequest={deleteRequestHandler}></MyRequests>
      </div>
    </div>

  )
};