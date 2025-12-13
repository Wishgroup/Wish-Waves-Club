import React, { useState } from 'react'
const settingIcon = '/img/svg/setting.svg'
const weatherIcon = '/img/svg/weather.svg'
const islamIcon = '/img/svg/islam.svg'
const arrowIcon = '/img/svg/arrow.svg'

function Settings({ isDark, setIsDark, cursorColor, setCursorColor, showCursor, setShowCursor }) {
  const [isOpen, setIsOpen] = useState(false)

  const colors = ['blue', 'green', 'brown', 'pink', 'orange', 'black', 'white', 'purple', 'sky', 'cadetBlue', 'crimson', 'olive', 'red']

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleThemeToggle = (theme) => {
    if (theme === 'dark') {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }

  return (
    <div className={`grax_tm_settings ${isOpen ? 'opened' : ''} ${isDark ? 'changed' : ''}`}>
      <div className="icon">
        <img className="svg" src={settingIcon} alt="" />
        <a className={`link ${isOpen ? 'opened' : ''}`} href="#" onClick={(e) => { e.preventDefault(); handleToggle(); }}></a>
      </div>
      <div className="wrapper">
        <ul className="direction">
          <li>
            <a 
              className={`light ${!isDark ? 'active' : ''}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleThemeToggle('light'); }}
            >
              <img className="svg" src={weatherIcon} alt="" />
            </a>
          </li>
          <li>
            <a 
              className={`dark ${isDark ? 'active' : ''}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleThemeToggle('dark'); }}
            >
              <img className="svg" src={islamIcon} alt="" />
            </a>
          </li>
        </ul>
        <span className="title">Unlimited Colors</span>
        <ul className="colors">
          {colors.map((color) => (
            <li key={color} className={color === 'black' ? 'bl' : color === 'white' ? 'wh' : ''}>
              <a 
                className={color} 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCursorColor(color); }}
              ></a>
            </li>
          ))}
        </ul>
        <span className="title">Magic Cursor</span>
        <ul className="cursor">
          <li>
            <a 
              className={`showme ${showCursor ? 'show' : ''}`} 
              href="#" 
              onClick={(e) => { e.preventDefault(); setShowCursor(true); }}
            ></a>
          </li>
          <li>
            <a 
              className="hide" 
              href="#" 
              onClick={(e) => { e.preventDefault(); setShowCursor(false); }}
            >
              <img className="svg" src={arrowIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Settings

