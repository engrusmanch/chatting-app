import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    FormControlLabel,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Switch,
    Typography,
  } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  import userAvatar from "../assets/Photo.png";
import { ClosedCaptioning, Cross } from "@phosphor-icons/react";
import { XCircle } from "phosphor-react";
  
  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 300,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 300,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      
    },
  }));
  
  export function UserDrawer({ open, onClose, selectedItem }) {
    const classes = useStyles();
  
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={userAvatar} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">User Name</Typography>
            <Typography variant="body2" color="textSecondary">
              User Bio
            </Typography>
          </Box>
        </Box>
        <Button onClick={onClose}>
          <XCircle size={25} />
        </Button>
      </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="Allow Notifications" />
            <FormControlLabel
              control={<Switch />}
              label=""
              sx={{ ml: "auto" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Block User" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Clear History" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Delete Conversation" />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button variant="outlined" color="secondary" fullWidth>
            Log out
          </Button>
        </Box>
      </Drawer>
    );
  }
  