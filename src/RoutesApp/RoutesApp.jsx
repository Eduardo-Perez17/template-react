import { BrowserRouter, Routes, Route } from "react-router-dom";

// Utils
import { HOME, NOT_FOUND } from "../utils/constants/path.constants";

// Components
import { Layaout } from "../Layaout";

// Pages
import { Home, NotFound } from "../pages";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layaout />}>
          <Route path={HOME} element={<Home />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
