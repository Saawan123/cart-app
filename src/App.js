import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Store from './store/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
