import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { courses } from "../CourseData";
import Appbar from "../components/Appbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const unsplashImages = [
  "https://plus.unsplash.com/premium_photo-1680700148924-4abdd12c89b5?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613068687893-5e85b4638b56?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&q=80&w=3296&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  // ... add more URLs as needed ...
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SlideButton = styled(Button)(({ theme, isExpanded }) => ({
  width: isExpanded ? "150px" : "40px",
  transition: "width 0.3s",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const CoolCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 345,
  minHeight: 400,
  paddingBottom: "15px",

  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 12px rgba(0,0,0,0.2)",
  },
}));

const StyledCardContent = styled(CardContent)({
  flex: "1 0 auto",
});

const StyledCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "auto", // Pushes the actions to the bottom
});

const StyledCardActionArea = styled(CardActionArea)({
  height: "250px", // Adjust this value based on your design preference
});

function Courses() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Box sx={{}}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#FFB703",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {" "}
          <Toolbar>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {/* Insert the image here */}
              <img
                src="https://i.ibb.co/jG1Bvbt/DALL-E-2023-10-17-14-29-27-Vector-design-of-a-minimalist-logo-with-the-text-Shift-Left-in-a-sleek-mo.png"
                alt="Shift Left Logo"
                style={{ height: "70px", marginRight: "15px" }}
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Shift Left Course Registration
              </Typography>
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Search>
              <Button href="/signin" color="inherit">
                Sign In
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{
          marginTop: "40px",
          fontWeight: "bold", // Make it bold
          fontSize: "2.5rem", // Increase the font size
          color: "#023047", // Change the color to a standout color, for instance a shade of red
        }}
      >
        Explore Our Courses
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        style={{ marginBottom: "20px" }}
      >
        Discover a variety of courses that cater to different learning needs.
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{ padding: "2rem" }}
      >
        {courses
          .filter((course) => {
            return search.toLowerCase() === ""
              ? course
              : course.name.toLowerCase().includes(search);
          })
          .map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={course.name}>
              <CoolCard>
                <StyledCardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={unsplashImages[index % unsplashImages.length]}
                    alt={course.name}
                  />

                  <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                  </StyledCardContent>
                </StyledCardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/signup"
                    state={{ data: course.name }}
                    sx={{
                      backgroundColor: "#023047",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textTransform: "none",
                      padding: "10px 20px",
                      "&:hover": {
                        backgroundColor: "#219EBC",
                      },
                      "&:focus": {
                        boxShadow: "0 0 0 3px rgba(63,81,181,0.5)", // Add a focus ring for better accessibility
                      },
                    }}
                  >
                    Register Now!
                  </Button>
                </CardActions>
              </CoolCard>
            </Grid>
          ))}
      </Grid>
      <Footer />
    </div>
  );
}

export default Courses;
