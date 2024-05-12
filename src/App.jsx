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
import CryptoJS from 'crypto-js'

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

  // Redux 
  const dispatch = useDispatch();

  // Cookies 
  const token = Cookies.get('ris_ui_tok_id')

  // Encryption & Decryption
  function encryptObject(obj, key) {
    const jsonString = JSON.stringify(obj);
    const encryptedData = CryptoJS.AES.encrypt(jsonString, key).toString();
    return encryptedData;
  }

  function decryptObject(encryptedData, key) {
    if (!encryptObject.email) {
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
      const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedString);
    }
  }

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
          localStorage.setItem('us-uid-dta', encryptObject(data.user, process.env.REACT_APP_ENDEC_SECRET))
        }
      })
    } catch (error) {
      console.log('Auth Error', error)
    }
  }


  function GetDataThroughLocal(data) {
    dispatch(addInfo(decryptObject(data, process.env.REACT_APP_ENDEC_SECRET)))
  }

  const [splash, setSplash] = useState(true);

  // Dark Mode
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  useEffect(() => {
    if (token) {
      if (localStorage.getItem('us-uid-dta') === '' || !localStorage.getItem('us-uid-dta')) {
        GetUserInfo(token).then(() => {
          setTimeout(() => {
            setSplash(false);
          }, 3000)
        })
      } else {
        GetDataThroughLocal(localStorage.getItem('us-uid-dta'))
        setTimeout(() => {
          setSplash(false);
        }, 3000)
      }
    }

  }, [token])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={!token ? <Signin /> : !splash ? <Home /> : <SplashScreen />} />
        <Route path="/all-friends" element={!token ? <Signin /> : <AllFriends />} />
        <Route path="/sign-in" element={!token ? <SignUp /> : <Home />} />
        <Route path="/login" element={!token ? <Login /> : <Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
