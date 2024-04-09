import "./styles/index.scss";

import { Link } from 'react-router-dom';
import {useTheme} from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from "./providers/router";

const App = () => { 
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}> Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <AppRouter />
    </div>
  )
}

export default App