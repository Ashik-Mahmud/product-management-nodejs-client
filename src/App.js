import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateProduct from './Pages/CreateProduct/CreateProduct';
import Home from './Pages/Home/Home/Home';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <>
    <Header />
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/home' element={<Home />} />
         <Route path='/create-product' element={<CreateProduct />} />
         <Route path='/manage-product' element={<ManageProduct />} />
         <Route path='/update-product/:id' element={<UpdateProduct />} />
         
         {/* not found page  */}
         <Route path='*' element={<NotFound />} />
     </Routes>
    </>
  );
}

export default App;
