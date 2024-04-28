import { Navigate, Outlet } from "react-router-dom";

export const IsAuth = ({ children }: any) => {
  console.log(children);

  const isAuthenticated = () => {
    // Lógica de autenticação aqui, por exemplo, verificar se o usuário possui um token válido
    return localStorage.getItem("token") !== null;
  };

  return isAuthenticated() ? <Outlet /> : <Navigate to="/admin" />;
};