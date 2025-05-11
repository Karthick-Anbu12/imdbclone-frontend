import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Addmovie from './Components/Addmovie';
import Movies from './Components/Movies';
import Actors from './Components/Actors';
import Producer from './Components/Producer';
import Login from './Components/Login';
import { UserProvider } from './Components/Context';
import View from './Components/View';
function App() {

  return (
    <UserProvider>
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}>
    <Route index element={<Movies/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/addmovie' element={<Addmovie/>}></Route>
    <Route path='/addactor' element={<Actors/>}></Route>  
    <Route path='/addproducers' element={<Producer/>}></Route> 
    <Route path='/viewinfo/:id' element={<View/>}></Route>
    </Route>
  </Routes>
   </BrowserRouter>
   </UserProvider>
   
  )
}

export default App
