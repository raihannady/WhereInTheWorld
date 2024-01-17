import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import classes from "./style.module.scss";

export default function Header() {
  // const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // // function to toggle the dark mode as true or false
  // const toggleDarkTheme = () => {
  //   setToggleDarkMode(!toggleDarkMode);
  // };

  // // applying the primary and secondary theme colors
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "light",
  //     primary: {
  //       main: "#90caf9",
  //     },
  //     secondary: {
  //       main: "#131052",
  //     },
  //   },
  // });

  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.appbar}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div">
            Where in the world
          </Typography>
          <div className={classes.appbarDarkmode}>
            <DarkModeOutlinedIcon sx={{ mr: 1 }}></DarkModeOutlinedIcon>
            <Typography variant="body2" component="div">
              {/* <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} /> */}
              Dark Mode
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    // </ThemeProvider>
  );
}
