import React from 'react'

function Header({onDarkModeClick, isDarkMode}) {
    const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"
    
  return (
    <header>
        <button onClick={onDarkModeClick}>{buttonText}</button>
    </header>
  )
}

export default Header;