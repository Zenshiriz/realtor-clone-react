import './App.css';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUP from './pages/SignUP';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';

function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUP/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/offers' element={<Offers/>}/>
    </Routes>
   </Router>
    </>
  );
}

export default App;
