import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { CustomDialog, dialogOpenSubject$ } from "..";
import FavoriteTable from "./FavoriteTable/FavoriteTable";
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface NavbarInterface {};

 const Navbar: React.FC<NavbarInterface> = () => {
   const handleClick = () => {
     dialogOpenSubject$.setSubject = true;
   }
    return (
      <>
        <CustomDialog>
          <FavoriteTable />
        </CustomDialog>
        <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Happiness App
          </Typography>
          <IconButton  style={{ color: '#e832f4' }} /* color="secondary" */ aria-label="favorites" component="label" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </>
    )
 }

 export default Navbar;