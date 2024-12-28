import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ThemeContext from './contexts/ThemeContext';
import { Route, Routes } from 'react-router';
import Auth from './routes/auth/Auth';
import Home from './routes/Home';

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
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}


export default App;
