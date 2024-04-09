import { Suspense} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import MainPageAsync from './pages/MainPage/MainPage.async';
import useTheme from './theme/useTheme';

import "./styles/index.scss";

const App = () => { 
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={"/"}> Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Suspense fallback={<>Loading...</>}>
        <Routes>
            <Route path={"/about"} element={<AboutPageAsync />} />
            <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App