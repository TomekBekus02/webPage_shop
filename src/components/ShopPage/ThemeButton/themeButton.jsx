import { useState } from 'react'
import './themeButton.css'
import { useContext } from 'react'
import {ThemeContext} from '../../../App'

export default function ThemeButton(){
    const {currentTheme, handleCurrentTheme} = useContext(ThemeContext);
    return(
        <button onClick={handleCurrentTheme} className={`themeButton ${currentTheme} `}>
            <div className='themeContainer'>
                <div className="themeCircle"></div>
            </div>
        </button>
    )
}