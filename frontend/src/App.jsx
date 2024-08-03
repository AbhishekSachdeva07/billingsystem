import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';
import Signup from '../pages/Signup';
import Error from '../pages/Error';
import Logout from '../pages/Logout';
import ExpenseTracker from '../pages/Expensetracker';
import Billingsystem from '../pages/Billingsystem';

function App() {
  const [cookiesPresent, setCookiesPresent] = useState(false);
  const [models, setModels] = useState({
    billingsystem: false,
    expensetracker: false
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkForToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/check-for-token', { withCredentials: true });
        if (response.data.cookiesset) {
          setCookiesPresent(true);
          setModels({
            expensetracker: response.data.userData.models.expensetracker,
            billingsystem: response.data.userData.models.billingsystem
          });
          const userEmail = response.data.userData.email;
          navigate(`/welcome/${encodeURIComponent(userEmail)}`, { state: response.data.userData });
        }
      } catch (error) {
        console.error('Error checking for token:', error);
      }
    };
    if (['/signup', '/login', '/welcome/:email', '/welcome'].includes(location.pathname)) {
      checkForToken();
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome/:email" element={cookiesPresent ? <Welcome /> : <Navigate to="/login" />} />
        <Route path="/expensetracker/:email" element={models.expensetracker ? <ExpenseTracker /> : <Navigate to="/welcome" />} />
        <Route path="/billingsystem/:email" element={models.billingsystem ? <Billingsystem /> : <Navigate to="/welcome" />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
