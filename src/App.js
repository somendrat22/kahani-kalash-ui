import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Book from  "./Components/Book/Book";
function App(){  
  

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>}></Route>
          <Route exact path = "/ebook" element = {<Book></Book>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
