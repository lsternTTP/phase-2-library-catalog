import './App.css';
import AllBooks from './components/catalog/AllBooks';
import bookData from './BookData.json';

export default function App() {
  return (
    <main>
      <AllBooks books={bookData.catalog} />
    </main>
  )
};
