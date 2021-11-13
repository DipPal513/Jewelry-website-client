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
const Dashboard = () => {
  const {user,admin} = useAuth();
  let { path, url } = useRouteMatch();
 
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-content row">
          <div
            className="sidebar text-start py-3 pe-3 col-lg-2 col-md-5 shadow"
           
          >
            <h3 className="text-uppercase text-info ms-3 py-3">dashboard</h3>
            <ul style={{ listStyle: "none" }}>
              <NavLink
                to={`${url}/pay`}
                style={{
                 
                  textDecoration: "none",
                  color: "black",
                }}
                className="text-uppercase"
              >
                Pay
              </NavLink>
              <NavLink
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
              </NavLink>
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
          <div className="all-content col-lg-8 col-md-6">
            <Switch>
              <Route path={`${path}/addProduct`}>
                <AddData />
              </Route>
              <Route path={`${path}/myOrder`}>
                <MyOrder />
              </Route>
              <Route path={`${path}/addProduct`}>
                <AddData />
              </Route>
              <Route path={`${path}/addReview`}>
                <AddReview />
              </Route>
              <Route path={`${path}/manageOrder`}>
                <ManageOrder />
              </Route>
              <Route path={`${path}`}>
                <h2 className = 'text-uppercase my-3'>Hey,{user?.displayName} welcome to <span className = 'text-info'>dashboard</span></h2>
              </Route>
              <Route path={`${path}/pay`}>
                <h1 className= 'text-uppecase'>payment system coming soon</h1>
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
