import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Header.css";

function Header() {
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
          <MenuItem icon={<ReceiptOutlinedIcon />}>Skills</MenuItem>
          <MenuItem icon={<SettingsApplicationsRoundedIcon />}>Projects</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Header;
