import React, {FormEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";

const url = 'http://146.185.154.90:8000/messages';

const SendMessageForm = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.set('message', message);
    data.set('author', author);

    await fetch(url, {
      method: 'POST',
      body: data,
    });
    setMessage('');
    setAuthor('');
  };

  const onChangeInputAuthor = (value: string) => {
    setAuthor(value);
  };

  const onChangeInputMessage = (value: string) => {
    setMessage(value);
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <TextField
          id="outlined-basic"
          label='Author'
          variant="outlined"
          value={author}
          onChange={(e) => onChangeInputAuthor(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label='Message'
          variant="outlined"
          value={message}
          onChange={(e) => onChangeInputMessage(e.target.value)}
        />
        <Button variant="outlined" type="submit">Add</Button>
      </form>
    </div>
  );
};

export default SendMessageForm;