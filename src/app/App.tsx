import "./styles/index.scss";

import { Suspense} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage';
import {useTheme} from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { MainPage } from "pages/MainPage";

const App = () => { 
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}> Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Suspense fallback={<>Loading...</>}>
        <Routes> 
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App