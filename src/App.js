import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import Product from './page/product';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product/:id' element={<Product/>}/>
      </Routes>
    </div>
    );
};

export default App;