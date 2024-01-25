export default function AllBooks(props) {
  return (
    <ul>
      {props.books.map(
        (book) => (<li>{book.title} by {book.author}</li>)
      )}
    </ul>
  )
};