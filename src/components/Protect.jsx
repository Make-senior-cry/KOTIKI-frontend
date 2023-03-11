import { observable } from "mobx";
import { Navigate } from "react-router-dom";
import userStore from "../store/userStore";

const Protect = observable((props) => {
  const { children, redirectTo='/sign-in', guestOnly=false } = props;
  const shouldRedirect = userStore.isAuthorized && !guestOnly 
    || !userStore.isAuthorized && guestOnly;

  if (shouldRedirect) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
});

export default Protect;
