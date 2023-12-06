import { Route, Routes} from 'react-router-dom';
import Welcome from "./pages/Welcome"
import Products from "./pages/Products"
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <>
   <MainHeader/>
    <main>
      <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/products" element={<Products/>} exact/>
      <Route path='/products/:productId' element={<ProductDetail/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      </Routes>

    </main>
    </>
   
  );
}

export default App;
