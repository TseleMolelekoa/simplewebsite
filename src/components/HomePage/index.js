import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import Circle from "../circle";
import "../triangle.css"; // Import of the CSS file

const HomePage = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={{ height: "100vh", display: "flex" }}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Menu</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>
            <a href="#HomePage"></a>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />} ><a href="#bg-color">About</a></MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}><a href="#services">Services</a></MenuItem>
          <MenuItem icon={<SettingsApplicationsRoundedIcon />}><a href="#projects">Projects</a></MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}><a href="#contacts">Contacts</a></MenuItem>
        </Menu>
      </Sidebar>
      <div className="bg-gif">
        <Circle />
        <div className="button-container">
          <div className="downloadcv-button">
            <button className="download">Download CV</button>
          </div>
          <div className="contact-button">
            <button className="contact">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
