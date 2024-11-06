import WelcomePage from './components/WelcomePage/WelcomePage'
import ShopPage from './components/ShopPage/ShopPage.jsx'
import './App.css'
import {loginData} from'./loginData.js'
import { useState } from 'react'


function App() {
  const [loginSuccess, setLoginSuccess] = useState();

  function handleInputCorrectness(inputLogin, inputPassword){
    if(inputLogin===loginData.login && inputPassword===loginData.password){
      setLoginSuccess(true);
    }
    else{
      setLoginSuccess(false);
    }
  }
  return (
    <>
      {!loginSuccess //set ! to have easly working space with component
      ? <ShopPage/>
      : <WelcomePage handleInput={handleInputCorrectness}/>
      }
      
    </>
  )
}

export default App
