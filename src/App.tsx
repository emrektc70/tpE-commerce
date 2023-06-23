import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './page/register';
import Home from './page/home';
import Login from './page/login'
import AddUser from './page/addUser';
import Article from './page/article';
import GestionAchat from './page/gestionAchat';
import GestionAdmin from './page/gestionAdmin';
import GestionArticle from './page/gestionArticle';
import Security from './Security';
import EditProfil from './page/editProfil';
import { PageEnum } from './Security/pageEnum';

function App() {
  return (
    <Routes>
      <Route
        path={"/login"}
        element={
          <Security >
            <Login />
          </Security>
        }
      />
      <Route
        path={PageEnum.REGISTER}
        element={
          <Security >
            <Register />
          </Security>

        }
      />
      <Route
        path={PageEnum.HOME}
        element={
          <Security >
            <Home />
          </Security>

        }
      />

      <Route
        path={PageEnum.EDITPROFIL}
        element={
          <Security >
            <EditProfil />
          </Security>

        }
      />

      {/* ici */}
      <Route
        path={"/addUser"}
        element={
          <Security >
            <AddUser />
          </Security>

        }
      />
      <Route
        path={"/article"}
        element={
          <Security >
            <Article />
          </Security>

        }
      />
      <Route
        path={"/gestionAchat"}
        element={
          <Security >
            <GestionAchat />
          </Security>

        }
      />
      <Route
        path={"/gestionAdmin"}
        element={
          <Security >
            <GestionAdmin />
          </Security>

        }
      />
      <Route
        path={"/gestionArticle"}
        element={
          <Security >
            <GestionArticle />
          </Security>

        }
      />
    </Routes>
  )
}

export default App;
