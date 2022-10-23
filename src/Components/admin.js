import React from "react";
import "./admin.css";
import Button from "@mui/material/Button";
import Tablep from "./table";

const Admin = () => {
  return (
    <React.Fragment>
      <div className="area">
        <div className="heading">
          <p style={{ fontSize: 21, fontWeight: 700 }}>Users</p>
          <div className="butt">
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                borderRadius: "8px",
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              Add New
            </Button>
          </div>
        </div>
        <div>
          <Tablep />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
