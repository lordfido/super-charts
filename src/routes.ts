import { ROOT } from "./constants/clientRoutes";
import Homescreen from "./containers/Homescreen";

const routes = [
  {
    Component: Homescreen,
    exact: true,
    path: ROOT,
  }
]

export default routes;
