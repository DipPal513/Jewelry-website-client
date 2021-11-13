import "./App.css";
import Header from "./Pages/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import AddData from "./Pages/AddData";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Registration from "./Pages/Registration";
import AuthProvider, { AuthContext } from "./Contexts/AuthProvider";
import Login from "./Pages/Login";
import Purchase from "./Pages/Purchase";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home/Home";
import PrivateRoute from "./Pages/PrivateRoute";
import { Placeholder } from "react-bootstrap";
import MyOrder from "./Pages/Myorder";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase />
          </PrivateRoute>
     
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard/myOrder">
            <MyOrder />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
