import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
    else {
      setTheme(localStorage.getItem('theme'));
    }
    console.log(theme);

  }, [theme])

  return (
    <div data-theme={theme}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <NavBar />
      </ThemeContext.Provider>
    </div>
  );
}


export default App;
