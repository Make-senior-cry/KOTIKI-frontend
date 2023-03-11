import { observable } from "mobx";
import { Navigate } from "react-router-dom";
import userStore from "../store/userStore";

const Protect = observable(({ children, redirectTo }) => {
  if (userStore.isAuthorized) {
    return children;
  }

  return <Navigate to={redirectTo} replace />;
});

export default Protect;
