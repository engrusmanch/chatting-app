import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { ContactList } from './contacts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const users = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'John Doe',
    image: 'https://i.pravatar.cc/150?img=1',
    email: 'john.doe@example.com',
    phone: '+1-123-456-7890',
    address: '123 Main St, Anytown USA',
  },
  {
    id: 4,
    name: 'Jane Smith',
    image: 'https://i.pravatar.cc/150?img=1',
    email: 'jane.smith@example.com',
    phone: '+1-123-456-7890',
    address: '123 Main St, Anytown USA',
  },
  {
    id: 5,
    name: 'Bob Johnson',
    image: 'https://i.pravatar.cc/150?img=1',
    email: 'bob.johnson@example.com',
    phone: '+1-123-456-7890',
    address: '123 Main St, Anytown USA',
  },
  // add more users here
];

function SideBar() {
  const classes = useStyles();

  return (
    // <List className={classes.root}>
    //   {users.map((user) => (
    //     <ListItem key={user.id} button>
    //       <ListItemAvatar>
    //         <Avatar alt={user.name} src={user.image} />
    //       </ListItemAvatar>
    //       <ListItemText primary={user.name} />
    //     </ListItem>
    //   ))}
    // </List>
    <ContactList className={classes.root}/>
  );
}

export default SideBar;
