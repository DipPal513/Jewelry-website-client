import React from "react";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AddData from "../AddData";
import MyOrder from "../Myorder";
import MakeAdmin from "./MakeAdmin";
import ManageOrder from "./ManageOrder";
import AddReview from "./AddReview";
import MangaProduct from "./ManageProduct";
import { useHistory } from "react-router";
const Dashboard = () => {
  const history = useHistory();
  const {user,admin,logOut} = useAuth();
  let { path, url } = useRouteMatch();
  const handleLogOut = () =>{
    logOut();
    alert('log out successfully');
    history.push('/login');
  }
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-content row">
          <div
            className="sidebar text-start py-3 pe-3 col-lg-2 col-md-3 col-sm-12 shadow"
           
          >
            <h3 className="text-uppercase text-info ms-3 py-3">dashboard</h3>
            <ul style={{ listStyle: "none" }}>
              {user?.email && <button className = "btn btn-sm bg-danger text-white mb-3" onClick={handleLogOut}>LogOut</button>}
              <br />
              {!admin &&<NavLink
                to={`${url}/pay`}
                style={{
                 
                  textDecoration: "none",
                  color: "black",
                }}
                className="text-uppercase"
              >
                Pay
              </NavLink>}
              {!admin &&<>  <NavLink
                to={`${url}/myOrder`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
                className="text-uppercase my-3"
              >
                my Orders
              </NavLink>
              
              
              <NavLink
                to={`${url}/addReview`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
                className="text-uppercase"
              >
               add a review
              </NavLink></>}
             {admin &&
              <><NavLink
                to={`${url}/addProduct`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
                className="text-uppercase mt-3"
              >
                add product
              </NavLink>
             
              <NavLink
                to={`${url}/manageOrder`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
                className="text-uppercase mt-3"
              >
                Manage All orders
              </NavLink>
              <NavLink
                to={`${url}/manageProduct`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
                className="text-uppercase mt-3"
              >
               Manage Product
              </NavLink>
         
              <NavLink
                to={`${url}/makeAdmin`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
                className="text-uppercase mt-3"
              >
               make admin
              </NavLink></>}
            </ul>
          </div>
          <div className="all-content col-lg-8 col-md-8 col-sm-12">
            <Switch>
              <Route path={`${path}/addProduct`}>
                <AddData />
              </Route>
              <Route exact path={`${path}/myOrder`}>
                <MyOrder />
              </Route>
              <Route path={`${path}/addProduct`}>
                <AddData />
              </Route>
              <Route exact path={`${path}/addReview`}>
                <AddReview />
              </Route>
              <Route exact path={`${path}/manageOrder`}>
                <ManageOrder />
              </Route>
              <Route exact path={`${path}`}>
                <h2 className = 'text-uppercase my-3'>Hey,{user?.displayName} welcome to <span className = 'text-info'>dashboard</span></h2>
              </Route>
              <Route exact path={`${path}/pay`}>
                <h1 className= 'text-uppecase'>payment system coming soon</h1>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
              <Route path={`${path}/manageProduct`}>
                <MangaProduct />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
