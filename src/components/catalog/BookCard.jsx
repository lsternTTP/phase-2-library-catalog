import './BookCard.css';
const images = require.context('./', true);

export default function BookCard(props) {

  const createRequestHandler = (event) => {
    event.preventDefault();

    const bookData = props.item;
    props.onAddRequest(bookData);
  };

  return (
    <div className="book-card">

      <img src={props.item.img} alt={`book cover of ${props.item.title} by ${props.item.author}`}/>

      <div className="book-info">
        <h2 className="book-title">{props.item.title}</h2>
        <h3 className="book-author-name">{props.item.author}</h3>
        <p className="book-publishing-info">Published {props.item.published} | {props.item.language}</p>
        <p className="book-description">{props.item.description}</p>
      </div>

      <button className="requests-button" onClick={createRequestHandler}>Request</button>

    </div>
  )
};