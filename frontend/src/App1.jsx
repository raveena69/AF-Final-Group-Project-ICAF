import React, {useContext} from 'react';
import Home from './Home';
import SignUp from "./SignUp";
import SignUpMain from "./SignUpMain";
import SignInMain from "./SignInMain";
import {BrowserRouter as Router,Route,Switch, HashRouter, Redirect} from "react-router-dom";

// import PrivateRoute from "./components/routing/PrivateRoute";
// import AdminHome from "./components/pages/AdminHome";
// import About from "./components/pages/About";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import Alerts from "./components/layout/Alerts";

// import ContactState from "./context/contact/ContactState";
// import AuthState from "./context/auth/AuthState";
// import AlertState from "./context/alert/AlertState";

// components
import AdminLayout from "./components/Layout/AdminLayout";
// pages
import Error from "./pages/error/Error";
import Login from "./pages/login/Login";
// context
import { AuthContext } from "./context/AuthContext";
// redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends React.Component{

    render() {
      // global
      let { isAuthenticated } = useContext(AuthContext)

        return(
            // <Router>
            //     <Switch>
            //         <Route exact path={"/"}>
            //             <Home/>
            //         </Route>
            //         <Route exact path={"/signUpMain"}>
            //             <SignUpMain/>
            //         </Route>
            //         <Route exact path={"/signInMain"}>
            //             <SignInMain/>
            //         </Route>
            //         <Route exact path={"/signUp"}>
            //             <SignUp/>
            //         </Route>
            //         {/* <PrivateRoute exact path="/adminHome" component={AdminHome} />
            //         <Route exact path="/about" component={About} />
            //         <Route exact path="/register" component={Register} />
            //         <Route exact path="/login" component={Login} /> */}
                    
            //     </Switch>
            // </Router>

          <Provider store={store}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={true}
            draggable={false}
            pauseOnHover={false}
          />

          <HashRouter>
            <Router>
              <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route exact path={"/signUpMain"}>
                    <SignUpMain/>
                </Route>
                <Route exact path={"/signInMain"}>
                    <SignInMain/>
                </Route>
                <Route exact path={"/signUp"}>
                    <SignUp/>
                </Route>
                <Route exact path="/adminDashboard" render={() => <Redirect to="/admin/dashboard" />} />
                <Route exact path="/admin" render={() => <Redirect to="/admin/dashboard" />} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/admin" component={AdminLayout} />
                <Route component={Error} />
              </Switch>
              </Router>
          </HashRouter>
          </Provider>
          );

          // #######################################################################

          function ProtectedRoute ({ component: Component, ...rest }) {
          return (
          <Route
            {...rest}
            render={props =>
              isAuthenticated() ? (
                <Component {...props} /> 
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              )
            }
          />
          );
          }

          //   <AuthState>
          //     <ContactState>
          //       <AlertState>
          //         <Router>
          //               <Alerts />
          //               <Switch>
          //                 {/* <Route exact path={"/"}>
          //                     <Home/>
          //                 </Route>
          //                 <Route exact path={"/signUpMain"}>
          //                     <SignUpMain/>
          //                 </Route>
          //                 <Route exact path={"/signInMain"}>
          //                     <SignInMain/>
          //                 </Route>
          //                 <Route exact path={"/signUp"}>
          //                     <SignUp/>
          //                 </Route> */}
          //                 <Route exact path="/" component={Home} />
          //                 <Route exact path="/signUpMain" component={SignUpMain} />
          //                 <Route exact path="/signInMain" component={SignInMain} />
          //                 {/* <Route exact path="/adminHome" component={AdminHome} />
          //                 <Route exact path="/about" component={About} />
          //                 <Route exact path="/register" component={Register} />
          //                 <Route exact path="/login" component={Login} /> */}
          //                 <Fragment>
          //                   <div className="container">
          //                     <Alerts />
          //                     <Switch>
          //                       <PrivateRoute exact path="/adminHome" component={AdminHome} />
          //                       <Route exact path="/about" component={About} />
          //                       <Route exact path="/register" component={Register} />
          //                       <Route exact path="/login" component={Login} />
          //                     </Switch>
          //                   </div>
          //                 </Fragment>
          //               </Switch>
          //         </Router>
          //       </AlertState>
          //     </ContactState>
          // </AuthState>

    }
};