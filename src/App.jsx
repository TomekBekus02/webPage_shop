import WelcomePage from './components/WelcomePage/WelcomePage'
import ShopPage from './components/ShopPage/ShopPage.jsx'
import './App.css'
import {loginData} from'./loginData.js'
import { useRef, useState } from 'react'


function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isLoginButtonClicked, setisLoginButtonClicked] = useState(false);

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
    <>
      {loginSuccess //set ! to have easly working space with component
      ? <ShopPage/>
      : <WelcomePage 
          handleInput={handleInputCorrectness} 
          loginSuccess={loginSuccess}
          isLoginButtonClicked={isLoginButtonClicked}
        />
      }
      
    </>
  )
}

export default App
