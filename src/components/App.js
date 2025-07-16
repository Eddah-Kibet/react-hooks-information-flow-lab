import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"
import Filter from "./Filter"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode}/>
        <Filter/>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
