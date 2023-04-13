import React from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Header = () => {
  return (
    <Card>
      <CardHeader as="h1" className="text-center" style={{backgroundColor:"lightgray"}}>
        {" "}
        THE GENERICS{" "}
      </CardHeader>
    </Card>
  );
};

export default Header;
