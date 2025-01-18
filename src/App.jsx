import WelcomePage from './components/WelcomePage/WelcomePage'
import ShopPage from './components/ShopPage/ShopPage.jsx'
import './App.css'
import {loginData} from'./loginData.js'
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null);

function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isLoginButtonClicked, setisLoginButtonClicked] = useState(false);
  const [currentTheme, setcurrentTheme] = useState('ligthMode'); // lightTheme / darkTheme

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('themeValue')) !== null){
      const themeStatus = JSON.parse(localStorage.getItem('themeValue'));

      setcurrentTheme(themeStatus);
    }
    else{
      localStorage.setItem('themeValue', JSON.stringify('ligthMode'));
    }
  },[])

  function handleCurrentTheme(){
    let theme = currentTheme === 'ligthMode' ? 'darkMode' : 'ligthMode';
    setcurrentTheme(theme);
    localStorage.setItem('themeValue', JSON.stringify(theme));
  }
  function handleInputCorrectness(inputLogin, inputPassword){
    if(inputLogin===loginData.login && inputPassword===loginData.password){
      setLoginSuccess(true);
    }
    else{
      setLoginSuccess(false);
    }
    setisLoginButtonClicked(() => true)
  }
  return (
    <ThemeContext.Provider value={{currentTheme, handleCurrentTheme}}>
      {loginSuccess //set ! to have easly working space with component
      ? <ShopPage 
          setLoginSuccess={setLoginSuccess} 
          setisLoginButtonClicked={setisLoginButtonClicked}
        />
      : <WelcomePage 
          handleInput={handleInputCorrectness} 
          loginSuccess={loginSuccess}
          isLoginButtonClicked={isLoginButtonClicked}
        />
      }
      
    </ThemeContext.Provider>
  )
}

export default App
