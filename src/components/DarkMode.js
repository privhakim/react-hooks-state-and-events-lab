import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {/* rest of the components */}
      <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default App;
