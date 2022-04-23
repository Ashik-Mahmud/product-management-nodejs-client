import { createContext } from 'react';
import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Auth/RequireAuth';
import useFirebase from './Hooks/useFirebase';
import About from './Pages/About/About';
import CreateProduct from './Pages/CreateProduct/CreateProduct';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';
export const AppContext = createContext(null)
function App() {
    const {isAuth, user, loading} = useFirebase();
  return (
    <>
    <Toaster />
    <AppContext.Provider value={{isAuth, user, loading}}>
    <Header />
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/home' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/login' element={<Login />} />
         <Route path='/create-product' element={<RequireAuth><CreateProduct /></RequireAuth>} />
         <Route path='/manage-product' element={<RequireAuth><ManageProduct /></RequireAuth>} />
         <Route path='/update-product/:id' element={<RequireAuth><UpdateProduct /></RequireAuth>} />

         
         {/* not found page  */}
         <Route path='*' element={<NotFound />} />
     </Routes>
     </AppContext.Provider>
    </>
  );
}

export default App;
