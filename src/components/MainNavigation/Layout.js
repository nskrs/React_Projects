import { Fragment } from "react";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <Fragment>
      
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;