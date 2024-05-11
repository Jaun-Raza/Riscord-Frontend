import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Toggle Action & States
import { toggleTheme } from './redux/slices/ToggleTheme';
import { addInfo } from './redux/slices/User';

// RTK 
import { useGetUserDataQuery } from './RTK/ApiRequests';

// Assets
import SplashScreen from './components/partials/SplashScreen';

// Cookies
import Cookies from 'js-cookie';

// Pages
import Home from './pages/Home';
import AllFriends from './pages/AllFriends';
import AddFriend from './pages/AddFriend';

// CSS
import './index.css'
import Signin from './pages/Signin';
import SignUp from './authPages/SignUp';
import Login from './authPages/Login';



function App() {

  const { theme } = useSelector((state) => state.toggleTheme);
  const { user } = useSelector((state) => state.userInfo);
  console.log(user)

  // Redux 
  const dispatch = useDispatch();

  // Cookies 
  const token = Cookies.get('ris_ui_tok_id')

  // Api Reqs
  const GetUserInfo = async (token) => {
    try {
      await fetch(`http://localhost:1024/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then((response) => {
        return response.json();
      }).then((data) => {

        if (!data.success) {
          setSplash(true);
        }
  
        if (token && data.success) {
          dispatch(addInfo(data.user))
        }
      })
    } catch (error) {
      console.log('Auth Error', error)
    }
  }

  const [splash, setSplash] = useState(true);

  // Dark Mode
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  useEffect(() => {
    if (user === 0) {
      setTimeout(async() => {
        setSplash(false);
      }, 3000)
    }

    if (token && user !== 0) {
      GetUserInfo(token);
      setSplash(false);
    } 
  }, [token])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={user !== 0 ? <Signin /> : !splash ? <Home /> : <SplashScreen />} />
        <Route path="/all-friends" element={user !== 0 ? <Signin /> : <AllFriends />} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
