import { useState } from 'react'
import './themeButton.css'
export default function ThemeButton(){
    const [lightTheme, setlightTheme] = useState(false);
    return(
        <button onClick={() => setlightTheme(theme => !theme)} className={`themeButton ${lightTheme ?'DarkMode': 'ligthMode'} `}>
            <div className='themeContainer'>
                <div className="themeCircle"></div>
            </div>

        </button>
    )
}