import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './componentes/Signup';
import Login from './componentes/Login';
import TodoList from './componentes/VisitList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='visit' element={<TodoList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
