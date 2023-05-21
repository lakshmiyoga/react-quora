import './App.css'
import AddQuestion from './component/AddQuestion/AddQuestion';
import AnswerPage from './component/AnswerPage/AnswerPage';
import Home from "./component/Home/Home";
import Login from './component/Login/Login';
import ProtectedRoute from './component/ProductedRoute/ProtectedRoute';
import Register from "./component/Register/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<ProtectedRoute/>}>
        <Route path='/addQuestion' element={<AddQuestion/>}/>
        <Route path='/answerPage' element={<AnswerPage/>}/>
      </Route>  
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
