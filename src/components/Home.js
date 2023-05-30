import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button, Badge, Box} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Face5Icon from '@mui/icons-material/Face5';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

function Home (){
    const [adult, setCountA] = React.useState(1);
    const [child, setCountC] = React.useState(0);
    const [location, setLoc] = React.useState('');
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const handleChange = (event) => {
        setLoc(event.target.value);
    };
    return (
        <div>
            {/* Hero section */}
            <div className="hero-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-7 hero-text">
                            <h1>The great getaway,<span>your way</span></h1>
                            <br/>
                            <p>Save at least 15% on stays worldwide, 
                                from relaxing retreats to off-grid adventures</p>
                            <Link to="/products"><Button variant="contained">Find Getaway Deals</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feilds */}
            <br></br>
            <div class="container-fluid trav-feild">
                <div className='row'>
                    <div class="col-md-4 col-sm-12 custBox">
                        <FormControl fullWidth>
                            <InputLabel id="standard-basic">Where are you going?</InputLabel>
                            <Select
                            value={location}
                            label="Age"
                            onChange={handleChange}
                            >
                            <MenuItem value={"goa"}><LocationOnOutlinedIcon/>Goa , India</MenuItem>
                            <MenuItem value={"mumbai"}><LocationOnOutlinedIcon/>Mumbai , India</MenuItem>
                            <MenuItem value={"delhi"}><LocationOnOutlinedIcon/>Delhi , India</MenuItem>
                            <MenuItem value={"rishikesh"}><LocationOnOutlinedIcon/>Rishikesh , India</MenuItem>
                            <MenuItem value={"varanasi"}><LocationOnOutlinedIcon/>Varanasi , India</MenuItem>
                            <MenuItem value={"indore"}><LocationOnOutlinedIcon/>Indore , India</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div class="col-md-4 col-sm-12  custBox">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateRangePicker']}>
                                <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div class="col-md-4 col-sm-12 custBox">
                        <FormControl fullWidth>
                            <InputLabel id="standard-basic">Adult {adult}, Child {child}</InputLabel>
                            <Select
                            onChange={handleChange}
                            >
                            <MenuItem>
                                <div>
                                    Adult &nbsp;
                                    <Badge color="secondary" badgeContent={adult}>
                                        <PersonIcon />
                                    </Badge>
                                    <Button
                                        aria-label="reduce"
                                        onClick={() => {
                                        setCountA(Math.max(adult - 1,0));
                                        }}
                                    >
                                        <RemoveIcon fontSize="small" />
                                    </Button>
                                    <Button
                                        aria-label="increase"
                                        onClick={() => {
                                        setCountA(adult + 1);
                                        }}
                                    >
                                        <AddIcon fontSize="small" />
                                    </Button>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div>
                                    Child &nbsp;
                                    <Badge color="secondary" badgeContent={child}>
                                        <Face5Icon />
                                    </Badge>
                                    <Button
                                        aria-label="reduce"
                                        onClick={() => {
                                        setCountC(Math.max(child - 1,0));
                                        }}
                                    >
                                        <RemoveIcon fontSize="small" />
                                    </Button>
                                    <Button
                                        aria-label="increase"
                                        onClick={() => {
                                        setCountC(child + 1);
                                        }}
                                    >
                                        <AddIcon fontSize="small" />
                                    </Button>
                                </div>
                            </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <br></br>
            <Carousel responsive={responsive} transitionDuration={500} className='container'>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." height={200}/>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." height={200}/>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/2101528/pexels-photo-2101528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." height={200}/>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." height={200}/>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." height={200}/>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." height={200}/>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/2101528/pexels-photo-2101528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." height={200}/>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="..." height={200}/>
                    </div>
            </Carousel>
            <br></br>
            {/* Destinations section */}
            <div className="destinations-section">
                <div class="container-fluid">
                    <h2>Featured Destinations</h2>
                    <br/>
                    <div class="row">
                        <div class="col-md-4 destination-card">
                            
                            <div class="view overlay zoom">
                                <img
                                    src="/images/dest1.jpg"
                                    alt="destination1"
                                    class="img-fluid"
                                />
                            </div>
                            <h3>India Gate, Delhi</h3>
                            <Button variant="contained">View Tour</Button>
                        </div>
                        <div class="col-md-4 destination-card">
                            <img
                                src="/images/dest2.jpg"
                                alt="destination2"
                                className="img-fluid"
                            />
                            <h3>Temple, Mumbai</h3>
                            <Button variant="contained">View Tour</Button>
                        </div>
                        <div class="col-md-4 destination-card">
                            <img
                                src="/images/dest3.jpg"
                                alt="destination3"
                                className="img-fluid"
                            />
                            <h3>Temple, Chennai</h3>
                            <Button variant="contained">View Tour</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;