import './RequestCard.css';

export default function RequestCard(props) {

  const cancelRequestHandler = (event) => {
    event.preventDefault();
    
    const bookID = props.item.id;
    props.onCancelRequest(bookID);
  }

  return (
    <div className="request-card">

      <img className="request-img" src={props.item.img} />

      <div className="request-info">
        <h2 className="request-title">{props.item.title}</h2>
        <h3 className="request-author-name">{props.item.author}</h3>
      </div>

      <button className="cancel-request-button" onClick={cancelRequestHandler}>X</button>

    </div>
  )
};