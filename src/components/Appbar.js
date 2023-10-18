import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFB703",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ padding: "0 2rem" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src="https://i.ibb.co/jG1Bvbt/DALL-E-2023-10-17-14-29-27-Vector-design-of-a-minimalist-logo-with-the-text-Shift-Left-in-a-sleek-mo.png"
              alt="Shift Left Logo"
              style={{ height: "70px", marginRight: "15px" }}
            />
            <Typography variant="h6" component="div">
              Shift Left Course Registration
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            href="/signin"
            color="inherit"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
