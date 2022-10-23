import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import profile from "./a.jpg";

function createData(photo, name, mobile, email, status, operation, action) {
  return { photo, name, mobile, email, status, operation, action };
}

const rows = [
  createData(
    5,
    "Aksha Sandmali",
    "+94752341231",
    "aksha@gmail.com",
    "Active",
    89,
    "Login"
  ),
  createData(
    5,
    "Aksha Sandmali",
    "+94752341231",
    "aksha@gmail.com",
    "Active",
    89,
    "Login"
  ),
  createData(
    5,
    "Aksha Sandmali",
    "+94752341231",
    "aksha@gmail.com",
    "Active",
    89,
    "Login"
  ),
  createData(
    5,
    "Aksha Sandmali",
    "+94752341231",
    "aksha@gmail.com",
    "Active",
    89,
    "Login"
  ),
  createData(
    5,
    "Aksha Sandmali",
    "+94752341231",
    "aksha@gmail.com",
    "Active",
    89,
    "Login"
  ),
  createData(
    5,
    "Aksha Sandmali",
    "+94752341231",
    "aksha@gmail.com",
    "Active",
    89,
    "Login"
  ),
  createData(
    5,
    "Aksha Sandmali",
    "+94752341231",
    "aksha@gmail.com",
    "Active",
    89,
    "Login"
  ),
];

const Tablep = () => {
  return (
    <React.Fragment>
      <div className="areas">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" margin-right="1px">
                  <b>Photo</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b>User Name</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b>Mobile</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b>Email</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b>Status</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b>Operation</b>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <b>Action</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={profile} alt="" />
                  </TableCell>

                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.mobile}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        textTransform: "capitalize",
                        backgroundColor: "#8bdf9d",
                      }}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <EditIcon style={{ color: "#1976d2", cursor: "pointer" }} />
                    &emsp;{" "}
                    <DeleteIcon
                      style={{ color: "#1976d2", cursor: "pointer" }}
                    />
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        textTransform: "capitalize",
                      }}
                    >
                      {row.action}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
};

export default Tablep;
