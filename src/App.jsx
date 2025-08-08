
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './layouts/Nav'
import Header from './layouts/Header'
import ComingSoon from './components/home/CommingSoon'
import Footer from './layouts/Footer'
import ContactUs from './pages/ContactUs';

function App() {


  return (
    <Router>
      <Nav />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comingSoon' element={<ComingSoon />} />
        <Route path='/contactUs' element={<ContactUs/>}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </Router>
  )
}

export default App
