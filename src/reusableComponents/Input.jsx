import { forwardRef } from "react"
import './reusableComponents.css'

const Input = forwardRef(function Input({labelName,...props}, ref){
    return(
        <div className="inputContainer">
            <label>{labelName}</label>
            <input ref={ref} {...props}/>
        </div>
    )
})

export default Input