/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/FoodieEats.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import {Link} from "react-scroll"
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Modal from "./Modal"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { duration } from "@mui/material";


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      location:"home-banner-container",
      offset:50,
      duration:150
    },
    {
      text: "About",
      icon: <InfoIcon />,
      location:"about-section-container",
      offset:-75,
      duration:200
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      location:"work-section-wrapper",
      offset:-50,
      duration:220
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      location:"footer",
      offset:50,
      duration:270
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      location:"",
      offset:50,
      duration:150
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="home-banner-container" spy={true} smooth={true} offset={50} duration={150} >Home</Link>
        <Link to="about-section-container" spy={true} smooth={true} offset={-75} duration={200} >About</Link>
        <Link to="work-section-wrapper" spy={true} smooth={true} offset={-50} duration={220} >Testimonials</Link>
        <Link to="footer" spy={true} smooth={true} offset={50} duration={270} >Contact</Link>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button" onClick={() => setShowModal(true)} >LOGIN</button>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)}/>}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <Link className="drawer-link" to={item.location} spy={true} smooth={true} offset={item.offset} duration={item.duration}> 
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
