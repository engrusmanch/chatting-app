import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import { styled } from '@mui/styles';
import { Badge, Box } from '@mui/material';
import SearchInput from './search';

const useStyles = makeStyles((theme) => ({
    avatar: {
        // backgroundColor: theme.palette.secondary.main,
    },
    online: {
        backgroundColor: '#4caf50',
        borderRadius: '50%',
        width: '10px',
        height: '10px',
        position: 'absolute',
        right: '0',
        bottom: '0',
    },
    box: {
        width: '100%', 
        height: '100%', 
        maxWidth: 360, 
        display: 'flex', 
        flexDirection: 'column', 
        overflow: 'auto', 
        boxShadow: '0px 0px 4px rgba(2, 17, 37, 0.04), 2px 0px 8px rgba(2, 17, 37, 0.04), 6px 0px 16px rgba(2, 17, 37, 0.04)'  // named color
    },
    offline: {
        backgroundColor: '#9e9e9e',
        borderRadius: '50%',
        width: '10px',
        height: '10px',
        position: 'absolute',
        right: '0',
        bottom: '0',
    },
    listItemText: {
        width: '150px',
    },

}));

export function ContactList() {
    const classes = useStyles();

    // Define dummy data
    const contacts = [
        {
            id: 1,
            name: 'John Doe',
            avatar: 'https://i.pravatar.cc/150?img=6',
            isOnline: true,
            lastMessage: 'Hey, how are you?',
            lastMessageTime: '9:30 AM',
        },
        {
            id: 2,
            name: 'Jane Doe',
            avatar: 'https://i.pravatar.cc/150?img=1',
            isOnline: false,
            lastMessage: 'Can we talk later?',
            lastMessageTime: '10:00 PM',
        },
        {
            id: 3,
            name: 'Mike Smith',
            avatar: 'https://i.pravatar.cc/150?img=2',
            isOnline: true,
            lastMessage: 'See you soon!',
            lastMessageTime: '11:00 PM',
        },
        {
            id: 4,
            name: 'M.Usman',
            avatar: 'https://i.pravatar.cc/150?img=3',
            isOnline: true,
            lastMessage: 'Suna Jigar Kesa Hai',
            lastMessageTime: '10:12 PM',
        },
        {
            id: 5,
            name: 'Major Asad',
            avatar: 'https://i.pravatar.cc/150?img=4',
            isOnline: true,
            lastMessage: 'Yara Kal Ka Scene Karty Hain',
            lastMessageTime: 'Yesterday',
        },
        {
            id: 6,
            name: 'Talha Arshad',
            avatar: 'https://i.pravatar.cc/150?img=5',
            isOnline: true,
            lastMessage: 'Mera Ana Mushkil Hai Bro Acha Bat sun jana kahan hai',
            lastMessageTime: '12:30 AM',
        },
        {
            id: 7,
            name: 'John Doe',
            avatar: 'https://i.pravatar.cc/150?img=7',
            isOnline: true,
            lastMessage: 'Hey, how are you?',
            lastMessageTime: '9:30 AM',
        },
        {
            id: 8,
            name: 'Jane Doe',
            avatar: 'https://i.pravatar.cc/150?img=8',
            isOnline: false,
            lastMessage: 'Can we talk later?',
            lastMessageTime: '10:00 PM',
        },
        {
            id: 9,
            name: 'Mike Smith',
            avatar: 'https://i.pravatar.cc/150?img=9',
            isOnline: true,
            lastMessage: 'See you soon!',
            lastMessageTime: '11:00 PM',
        },
        {
            id: 10,
            name: 'M.Usman',
            avatar: 'https://i.pravatar.cc/150?img=10',
            isOnline: true,
            lastMessage: 'Suna Jigar Kesa Hai',
            lastMessageTime: '10:12 PM',
        },
        {
            id: 11,
            name: 'Major Asad',
            avatar: 'https://i.pravatar.cc/150?img=11',
            isOnline: true,
            lastMessage: 'Yara Kal Ka Scene Karty Hain',
            lastMessageTime: 'Yesterday',
        },
        {
            id: 12,
            name: 'Talha Arshad',
            avatar: 'https://i.pravatar.cc/150?img=12',
            isOnline: true,
            lastMessage: 'Mera Ana Mushkil Hai Bro Acha Bat sun jana kahan hai',
            lastMessageTime: '12:30 AM',
        },
    ];

    return (
        <Box sx={{
            width: '100%', height: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', overflow: 'auto', boxShadow: '0px 0px 4px rgba(2, 17, 37, 0.04), 2px 0px 8px rgba(2, 17, 37, 0.04), 6px 0px 16px rgba(2, 17, 37, 0.04)'  // named color
        }}>
            <SearchInput />
            <List style={{ maxWidth: 360, flex: 1 }} elevation={3}>
                {contacts.map((contact) => (
                    <ListItem key={contact.id}>
                        <ListItemAvatar>
                            <div style={{ position: 'relative' }}>
                                <Avatar alt={contact.name} src={contact.avatar} className={classes.avatar}>
                                    {contact.name.charAt(0)}
                                </Avatar>
                                <div
                                    className={contact.isOnline ? classes.online : classes.offline}
                                    style={{ position: 'absolute', bottom: 0, right: 15 }}>
                                </div>
                            </div>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText}
                            primary={contact.name}
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" variant="body2" color="textPrimary" noWrap sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {contact.lastMessage}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemSecondaryAction>
                            <Typography component="span" variant="body2" color="textSecondary">
                                {contact.lastMessageTime}
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Box>




    );
};


