import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/login';
import Register from './page/register';
import Home from './page/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
