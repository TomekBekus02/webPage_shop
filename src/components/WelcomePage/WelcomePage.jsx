import './WelcomePage.css'
import Input from '../../reusableComponents/Input'
import { useRef, useState } from 'react'

export default function WelcomePage({handleInput}){
    const loginInput = useRef();
    const passwordInput = useRef();

    const[showPassword, setShowPassword] = useState(false)
    let inputType = showPassword ? 'text' : 'password'
    

    return (
        <section className="welcome-page">
            <div className="loginContainer">
                <h1>Welcome to our online shop</h1>
                <Input type="text" placeholder='Enter Username' className='inputStyle' labelName="Login" ref={loginInput} />
                <Input type={inputType} placeholder='Enter Password' className='inputStyle' labelName="Password" ref={passwordInput}/>
                <div className='checkBox'>
                    <input type="checkbox" onClick={()=>setShowPassword(prev => !prev)}/>
                    <label>Show password</label>
                </div>

                <button onClick={() => handleInput(loginInput.current.value, passwordInput.current.value)}>Login</button>
            </div>
        </section>
    )
}