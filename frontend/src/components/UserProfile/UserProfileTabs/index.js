import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PhotostreamTab from "../Tabs/PhotostreamTab";
import "./UserProfileTabs.css";

const UserProfileTabs = () => {
  const [value, setValue] = useState("2");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="user-tabs-container">
        <div className="user-tabs-panel">
          <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab value="1" label="About" />
              <Tab value="2" label="Photostream" />
            </Tabs>
          </Box>
          {value === "2" && <PhotostreamTab />}
        </div>
      </div>
    </>
  );
};

export default UserProfileTabs;
