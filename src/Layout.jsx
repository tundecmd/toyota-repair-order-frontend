import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
// import Dashboard from './views/Dashboard';

import DashboardIcon from '@material-ui/icons/Dashboard';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FunctionsIcon from '@mui/icons-material/Functions';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ListIcon from '@mui/icons-material/List';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useDispatch, useSelector } from "react-redux";
import { Signout } from './actions';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Layout (props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const signout = () => {
    dispatch(Signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <>
        <Link
          to="/"
          className='text-white px-3'
        >
          {'Dashboard'}
        </Link>
        <Link
          to="/expected-vehicles"
          className='text-white px-3'
        >
          {'Expected Vehicles'}
        </Link>
        <Link
          to="/received-vehicles"
          className='text-white px-3'
        >
          {'Checked In/Received Vehicles'}
        </Link>
        <li className='list-unstyled' onClick={signout}>
          Signout
        </li>
      </>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <>
        <Link
          to="/signup"
            className='text-white px-3'
        >
          {'Register'}
        </Link>
        <Link
          to="/signin"
          className='text-white px-3'
        >
          {'Login'}
        </Link>
      </>
    );
  };

  // const rightLink = {
  //   fontSize: 16,
  //   color: 'common.white',
  //   ml: 3,
  // };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="error">
        <Toolbar>
          {
            auth.authenticate 
            ? 
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon className="text-white" />
              </IconButton> 
            :
              ""
          }
          
          <Typography variant="h6" noWrap component="div" className="text-white">
            TOYOTA
          </Typography>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {
              auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()
            }
          </Box>
        </Toolbar>
      </AppBar>
      {props.sidebar ? 
      <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <DashboardIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/dashboard" underline="none">
                  <ListItemText primary="Dashboard" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <DirectionsCarIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/expected-vehicles" underline="none">
                  <ListItemText fontSize="small m" primary="Expected Vehicles" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <List>
          <ListItem button> 
            <ListItemIcon className="text-danger">
                <EmojiTransportationIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/received-vehicles" underline="none">
                  <ListItemText primary="Received Vehicles" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <DynamicFormIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/customer-orders" underline="none">
                  <ListItemText primary="Customer Order Form" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <ReceiptIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/invoice" underline="none">
                  <ListItemText primary="Invoice" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <FunctionsIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/estimation" underline="none">
                  <ListItemText primary="Estimation" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <LiveHelpIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/questionnaire">
                  <ListItemText primary="Questionnaire" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <NextWeekIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/job-instruction" underline="none">
                  <ListItemText primary="Job Instruction" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <PlayArrowIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/quality-control-checklist" underline="none">
                  <ListItemText primary="Quality Control Checklist" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <ListIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/express-maintenance-checklist" underline="none">
                  <ListItemText primary="Express Maintenance Checklist" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <List>
          <ListItem button>
            <ListItemIcon className="text-danger">
                <InventoryIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/middle-final-inspection-sheet" underline="none">
                  <ListItemText primary="Middle/Final Inspection Sheet" className="text-dark" />
                </Link>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box>
        {props.children}
      </Box>
      
      </>
      : <Box>
        {props.children}
      </Box>
      }
      <Main>
        <DrawerHeader />
        {/* <Dashboard /> */}
      </Main>
    </Box>
  );
}
