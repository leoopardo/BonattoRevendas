import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const CheckIsAuth = ({ children }: any) => {
  console.log(children);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) return;
    navigate("/admin");
  }, [location]);

  return <Outlet />;
};
