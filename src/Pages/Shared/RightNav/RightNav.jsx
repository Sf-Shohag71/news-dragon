import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg1 from "../../../assets/bg.png"

const RightNav = () => {
  return (
    <div>
      <div>
        <Button className="mb-3" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </div>
      <div className="mt-5">
        <h4>Follow Us</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="text-center">
        <img src={bg1} alt="" />
        <h3 className="text-white z-index-2">Create an Amazing Newspaper</h3>
      </div>
    </div>
  );
};

export default RightNav;
