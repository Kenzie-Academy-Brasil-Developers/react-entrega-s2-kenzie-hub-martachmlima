import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Perfil from "../pages/Perfil";
import { useState, useEffect } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route exact path="/cadastro">
          <Cadastro authenticated={authenticated} />
        </Route>
        <Route exact path="/perfil">
          <Perfil authenticated={authenticated} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
