import "./styles/index.scss";

import {useTheme} from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from "./providers/router";

import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";

const App = () => { 
  const {theme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className={classNames("content-page")}>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App