import React from 'react';
import {MessageMutation} from "../../types";
import {Divider, ListItem, ListItemText, Paper, Typography} from "@mui/material";

const ChatPost: React.FC<MessageMutation> = ({id, message, author, datetime}) => {
  return (
    <Paper elevation={12} key={id}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={author}
          secondary={
            <React.Fragment>
              <Divider/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h5"
                color="text.primary"
              >
                {message}
              </Typography>
              {datetime}
            </React.Fragment>
          }
        />
      </ListItem>
    </Paper>
  );
};

export default ChatPost;