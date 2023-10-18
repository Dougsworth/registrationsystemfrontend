import React, { useState } from "react";
import Appbar from "../components/Appbar";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";

function Signin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const customer = { firstName, lastName, contactNumber };

  return (
    <div
      className="App"
      style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}
    >
      <Appbar />

      <Container
        component="main"
        maxWidth="md"
        style={{
          marginTop: "6%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={5}
          style={{
            padding: "50px 60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            style={{
              marginBottom: "25px",
              fontWeight: "bold",
              color: "#023047",
            }}
          >
            Welcome Back!
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            width="100%"
            spacing={3}
          >
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              InputProps={{
                style: { backgroundColor: "whitesmoke", borderRadius: "5px" },
              }}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              InputProps={{
                style: { backgroundColor: "whitesmoke", borderRadius: "5px" },
              }}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="contactNumber"
              label="Contact Number"
              name="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              InputProps={{
                style: { backgroundColor: "whitesmoke", borderRadius: "5px" },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{
                margin: "30px 0 20px",
                padding: "10px 0",
                borderRadius: "10px",
                fontSize: "18px",
                backgroundColor: "#023047",
                "&:hover": {
                  backgroundColor: "#219EBC",
                },
              }}
              component={Link}
              to="/profile"
              state={{ data: customer }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

export default Signin;
