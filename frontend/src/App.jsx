import { Routes, Route } from 'react-router-dom';
import SmallApp from './components/SmallApp';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SmallApp />} />
      <Route path="/add" element={<Book />} />
    </Routes>
  );
}

export default App;
