import { Button, Grid, Typography, Box, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Delete, Edit, MoreVert as MoreVertIcon } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import "./css/style.css";

const employees = [
  {
    id: 1,
    firstname: "Joey",
    middlename: "",
    lastname: "Tribbiani",
    email: "joey.tribbiani@gmail.com",
    phone: "+91 9935123456",
    status: "Accepted",
    role: "Super Admin",
  },
  {
    id: 2,
    firstname: "Chandler",
    middlename: "",
    lastname: "Bing",
    email: "chandler.bing@gmail.com",
    phone: "+91 9942678944",
    status: "Pending",
    role: "Admin",
  },
  {
    id: 3,
    firstname: "Rachel",
    middlename: "",
    lastname: "Green",
    email: "rachel.green@gmail.com",
    phone: "+91 9945234444",
    status: "Rejected",
    role: "Management",
  },
  {
    id: 4,
    firstname: "Phoebe",
    middlename: "",
    lastname: "Buffey",
    email: "phoebe.buffey@gmail.com",
    phone: "+91 9916675777",
    status: "Invited",
    role: "Visitors",
  },
  {
    id: 5,
    firstname: "Monica",
    middlename: "",
    lastname: "Geller",
    email: "monica.geller@gmail.com",
    phone: "+91 9900896444",
    status: "Accepted",
    role: "Search Team",
  },
  {
    id: 6,
    firstname: "Ross",
    middlename: "",
    lastname: "Geller",
    email: "ross.geller@gmail.com",
    phone: "+91 9449069999",
    status: "Rejected",
    role: "Staff",
  },
  {
    id: 7,
    firstname: "Janice",
    middlename: "",
    lastname: "Litman",
    email: "janice.litman@gmail.com",
    phone: "+91 9150654888",
    status: "Invited",
    role: "Guest",
  },
];

const Employees = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          xs={12}
          direction={"row"}
          container
          sx={{ marginTop: 4 }}
          spacing={2}
        >
          <Grid
            container
            item={true}
            xs={12}
            mb={4}
            justifyContent="space-between"
          >
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              Employee Form
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/create-employee");
              }}
            >
              Create Employee
            </Button>
          </Grid>
          <Grid xs={12} item={true}>
            <TableContainer component={Paper}>
              <Table aria-label="simple data table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.firstname}</TableCell>
                      <TableCell>{row.lastname}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            navigate("/edit-employee");
                          }}
                        >
                          <Edit color="primary" />
                        </IconButton>
                        <IconButton>
                          <Delete color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Employees;
