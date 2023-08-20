import React, { useState } from 'react';
import { StyledForm, StyledButton } from '../../components';
import { StyledInput, StyledSelect } from '../../components/StyledForm/styled';
import { IRequestForm } from './types';

export const RequestForm = ({ previewRef }: IRequestForm) => {
  const [URL, setURL] = useState<string>('https://reqres.in/api/users?page=1');
  const [requestMethod, setRequestMethod] = useState<string>('post');
  const [requestBody, setRequestBody] = useState<string>('fetch');

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const options =
      requestMethod === 'post'
        ? {
            method: requestMethod,
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(requestBody),
          }
        : {};

    fetch(URL, options)
      .then(res => res.json())
      .then(result => {
        const text = JSON.stringify(result, null, 4);
        if (previewRef.current) {
          previewRef.current.innerText = text;
        }
      });
  };

  const urlChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setURL(event.currentTarget.value);
  };

  const methodChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setRequestMethod(event.currentTarget.value);
  };

  return (
    <StyledForm style={{ width: '50%' }}>
      <StyledInput
        name="url"
        type="text"
        placeholder="URL"
        onChange={urlChangeHandler}
        value={URL}
        required
      />
      <StyledSelect name="method" onChange={methodChangeHandler} value={requestMethod} required>
        <option value="post">POST</option>
        <option value="get">GET</option>
        <option value="put">PUT</option>
        <option value="delete">DELETE</option>
      </StyledSelect>
      <StyledButton onClick={submitHandler}>Submit</StyledButton>
    </StyledForm>
  );
};
