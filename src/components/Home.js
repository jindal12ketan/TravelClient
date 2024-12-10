import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Button,
  Badge,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Face5Icon from "@mui/icons-material/Face5";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Link } from "react-router-dom";

function Home() {
  const [adult, setCountA] = React.useState(1);
  const [child, setCountC] = React.useState(0);
  const [location, setLoc] = React.useState("");

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handleChange = (event) => {
    setLoc(event.target.value);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          p: 4,
          textAlign: "center",
          bgcolor: "background.paper",
          backgroundImage: "url('/images/background.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "color",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h1" gutterBottom>
          The great getaway,
          <br />
          <span
            style={{
              color: "rgb(85, 174, 216)",
              fontFamily: "Brush script MT",
            }}
          >
            your way
          </span>
        </Typography>
        <Typography variant="body1" paragraph>
          Save at least 15% on stays worldwide, from relaxing retreats to
          off-grid adventures.
        </Typography>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button variant="contained">Find Getaway Deals</Button>
        </Link>
      </Box>

      {/* Search Fields */}
      <Grid container spacing={2} sx={{ p: 4 }}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Where are you going?</InputLabel>
            <Select value={location} onChange={handleChange}>
              <MenuItem value="goa">
                <LocationOnOutlinedIcon /> Goa, India
              </MenuItem>
              <MenuItem value="mumbai">
                <LocationOnOutlinedIcon /> Mumbai, India
              </MenuItem>
              <MenuItem value="delhi">
                <LocationOnOutlinedIcon /> Delhi, India
              </MenuItem>
              <MenuItem value="rishikesh">
                <LocationOnOutlinedIcon /> Rishikesh, India
              </MenuItem>
              <MenuItem value="varanasi">
                <LocationOnOutlinedIcon /> Varanasi, India
              </MenuItem>
              <MenuItem value="indore">
                <LocationOnOutlinedIcon /> Indore, India
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker"]}>
              <DateRangePicker
                localeText={{ start: "Check-in", end: "Check-out" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>
              Adult {adult}, Child {child}
            </InputLabel>
            <Select>
              <MenuItem>
                <Box display="flex" alignItems="center">
                  Adult &nbsp;
                  <Badge color="secondary" badgeContent={adult}>
                    <PersonIcon />
                  </Badge>
                  <Button
                    aria-label="reduce"
                    onClick={() => setCountA(Math.max(adult - 1, 0))}
                    size="small"
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    aria-label="increase"
                    onClick={() => setCountA(adult + 1)}
                    size="small"
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box display="flex" alignItems="center">
                  Child &nbsp;
                  <Badge color="secondary" badgeContent={child}>
                    <Face5Icon />
                  </Badge>
                  <Button
                    aria-label="reduce"
                    onClick={() => setCountC(Math.max(child - 1, 0))}
                    size="small"
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    aria-label="increase"
                    onClick={() => setCountC(child + 1)}
                    size="small"
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Carousel Section */}
      <Carousel
        responsive={responsive}
        transitionDuration={500}
        className="container"
      >
        {[
          "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/2101528/pexels-photo-2101528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/2101528/pexels-photo-2101528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ].map((src, index) => (
          <Box key={index} sx={{ p: 1 }}>
            <img
              src={src}
              alt="Destination"
              style={{ width: "100%", height: "200px" }}
            />
          </Box>
        ))}
      </Carousel>

      {/* Featured Destinations */}
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Featured Destinations
        </Typography>
        <Grid container spacing={2}>
          {[
            { title: "India Gate, Delhi", src: "/images/dest1.jpg" },
            { title: "Temple, Mumbai", src: "/images/dest2.jpg" },
            { title: "Temple, Chennai", src: "/images/dest3.jpg" },
          ].map((destination, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box sx={{ boxShadow: 3, p: 2 }}>
                <img
                  src={destination.src}
                  alt={destination.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Typography variant="h6" gutterBottom>
                  {destination.title}
                </Typography>
                <Button variant="contained">View Tour</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
