import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/global.css";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import CreatePassword from "../pages/CreatePassword";
import PasswordRecovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import CreateAccount from "../pages/CreateAccount";
import AccountInfo from "../pages/AccountInfo";
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/create-password" component={CreatePassword} />
              <Route exact path="/password-recovery" component={PasswordRecovery} />
              <Route exact path="/send-email" component={SendEmail}/>
              <Route exact path="/create-account" component={CreateAccount}/>
              <Route exact path="/account-info" component={AccountInfo}/>
              <Route exact path="/checkout" component={Checkout}/>
              <Route exact path="/orders" component={Orders}/>
              <Route path="*" component={NotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
