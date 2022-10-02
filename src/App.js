import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Book from  "./Components/Book/Book";
function App(){  
  
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route exact path = "/">
            <Home></Home>
        </Route>
        <Route exact path = "/ebook">
          <Book></Book>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
