import { Outlet } from "react-router-dom";
import "./_layaout.scss";

import { Box } from "../components";

const Layaout = () => {
  return (
    <Box className="grid-father">
      <Box className="grid-son">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layaout;
