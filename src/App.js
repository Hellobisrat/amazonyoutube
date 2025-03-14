
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Banner from './components/home/Banner';
import Home from './pages/Home';
import { productsData } from './api/api';
import Signin from './pages/Signin';
import Cart from './pages/Cart';

const Layout = ()=>{
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
    <Route index  element={<Home/>} loader={productsData}/>
    <Route path='/signin' element={<Signin/>   }></Route>
    <Route path='/cart' element={<Cart/>}/>
    </Route>
   )
    
   )
  return (
      
        <div className='font-bodyFont bg-gray-100 '>
         
          <RouterProvider router={router}/>
         
        </div>
   
  );
}

export default App;
