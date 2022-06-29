import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Header/Header';
import Direction from './Pages/Direction/Direction';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateOutlet from './Pages/PrivateOutlet/PrivateOutlet';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="home/:ticketID" element={<Direction />} />
              <Route path="destination" element={<Destination />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
