import './WelcomePage.css'
import Input from '../../reusableComponents/Input'
import { useRef, useState } from 'react'

export default function WelcomePage({handleInput, loginSuccess, isLoginButtonClicked}){
    const loginInput = useRef();
    const passwordInput = useRef();

    const[showPassword, setShowPassword] = useState(false)
    let inputType = showPassword ? 'text' : 'password'
    let wrongLoginCondition = !loginSuccess && isLoginButtonClicked
    
    const UnSuccessfulLoginInfo = <h3 className='wrongLoginInfo'>Wrong login or password</h3>
    return (
        <section className="welcome-page">
            <div className="loginContainer">
                <h1>Welcome to our online shop</h1>
                <Input 
                    type="text" 
                    placeholder='Enter Username' 
                    className={`inputStyle ${wrongLoginCondition ? 'wrongLoginInputStyle': null}`} 
                    labelName="Login" 
                    ref={loginInput} 
                />
                <Input 
                    type={inputType} 
                    placeholder='Enter Password' 
                    className={`inputStyle ${wrongLoginCondition ? 'wrongLoginInputStyle': null}`}
                    labelName="Password" 
                    ref={passwordInput}
                />
                <div className='checkBox'>
                    <input type="checkbox" onClick={()=>setShowPassword(prev => !prev)}/>
                    <label>Show password</label>
                </div>
                {wrongLoginCondition ? UnSuccessfulLoginInfo : null}

                <button onClick={() => handleInput(loginInput.current.value, passwordInput.current.value)}>Login</button>
            </div>
        </section>
    )
}