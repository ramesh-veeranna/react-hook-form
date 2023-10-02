import * as React from "react";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  PeopleAlt,
  AccountTree,
  LocalPostOffice,
} from "@mui/icons-material";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        height: "97vh",
        bgcolor: "background.paper",
        borderRight: "1px solid #ddd",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <PeopleAlt />
        </ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LocalPostOffice />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccountTree />
        </ListItemIcon>
        <ListItemText primary="Projects" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Project Title" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
