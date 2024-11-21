import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";

const Navbar = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Share this website",
          text: "Check out this amazing website!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.warn("Share API not supported.");
    }
  };
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Logo sx={{ height: "50px", width: "50px" }} /> */}
          <Logo width="200px" />
          <Typography
            component={Link}
            to="/"
            sx={{ textAlign: "center", textDecoration: "none", color: "white" }}
            variant="h4"
          >
            FilmSphere
          </Typography>
          <Box sx={{ display: "flex", gap:3 }}>


            <ShareIcon
              sx={{ width: "35px", height: "35px" }}
              onClick={handleShare}
            />
            <Button
              component={Link}
              to="/about"
              sx={{ color: "white", backgroundColor: "grey", textAlign: "center" }}
            >
              About US
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
