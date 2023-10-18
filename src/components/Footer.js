import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const footerStyles = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "white",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  minHeight: "60px",
  boxShadow: "0px -5px 10px rgba(46, 61, 142, 0.2)", // Halo effect
  display: "flex", // Add this
  justifyContent: "center",
  alignItems: "center",
};

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar sx={footerStyles}>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="https://i.ibb.co/jG1Bvbt/DALL-E-2023-10-17-14-29-27-Vector-design-of-a-minimalist-logo-with-the-text-Shift-Left-in-a-sleek-mo.png"
            alt="Shift Left Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          &copy; {new Date().getFullYear()} Shift Left Course Registration
          <Link
            href="/privacy-policy"
            color="inherit"
            style={{ marginLeft: "20px", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
        </Typography>
      </Toolbar>
    </Box>
  );
}
