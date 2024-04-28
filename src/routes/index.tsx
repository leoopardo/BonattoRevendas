import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLogin } from "../pages/admin/login";
import { PainelAdm } from "../pages/home";
import { IsAuth } from "./utils/auth";
import { CheckIsAuth } from "./utils/checkIsAuth";

export const BaseRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/auth"
          element={
            <IsAuth>
              <CheckIsAuth />
            </IsAuth>
          }
        >
          <Route path="/auth/adm" element={<PainelAdm />}>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
