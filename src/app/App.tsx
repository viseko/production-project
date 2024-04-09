import "./styles/index.scss";

import {useTheme} from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from "./providers/router";

import { NavBar } from "widgets/NavBar";

const App = () => { 
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  )
}

export default App