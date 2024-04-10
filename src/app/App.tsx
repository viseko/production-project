import "./styles/index.scss";

import {useTheme} from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from "./providers/router";

import { NavBar } from "widgets/NavBar";

const App = () => { 
  const {theme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  )
}

export default App