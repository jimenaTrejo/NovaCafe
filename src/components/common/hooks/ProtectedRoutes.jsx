import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ isAllowed, redirectTo = "/", children }) => {
  const location = useLocation();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  console.log(loggedInUser)
  // const { user, token } = useSelector((state) => state.auth);
  if (!loggedInUser) {
      if (location.pathname == "/login" || location.pathname == "/register") {
          return children ? children : <Outlet />;
      } else {
        return <Navigate to="/login" replace />;
      }
    }
    if (
      loggedInUser &&
      (location.pathname == "/login" || location.pathname == "/register")
    ) {
      return <Navigate to="/" replace />;
    }
    return children ? children : <Outlet />;



  // if (!user && !token) {
  //   if (location.pathname == "/login" || location.pathname == "/register") {
  //     return children ? children : <Outlet />;
  //   } else {
  //     return <Navigate to="/login" replace />;
  //   }
  // }
  // if (
  //   user &&
  //   (location.pathname == "/login" || location.pathname == "/register")
  // ) {
  //   return <Navigate to="/" replace />;
  // }
  // return children ? children : <Outlet />;
};

export default ProtectedRoutes;

// import { Outlet, Navigate } from "react-router-dom";
// import { useAuth } from "../../../features/auth/authProvider";
// export default function ProtectedRoute(){
//     // const [isAuth, setIsAuth] = useState(false);
//     const auth = useAuth();
//     return auth.isAuthenticated ? <Outlet/> : <Navigate to="/login" />;

// }

// import { Navigate, Outlet } from "react-router-dom";

// import PropTypes from "prop-types";

// export const ProtectedRoute = ({
//     isAllowed,
//     redirectTo = "/login",
//     children,
// }) => {
//     if (!isAllowed) {
//     return <Navigate to={redirectTo} replace/>
//     }

//     return children ? children : <Outlet />;
// };
