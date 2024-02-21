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
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>About</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Services</MenuItem>
          <MenuItem icon={<SettingsApplicationsRoundedIcon />}>Projects</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
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
