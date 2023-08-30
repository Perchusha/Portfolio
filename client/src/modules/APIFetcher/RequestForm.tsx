import React, { useState } from 'react';
import { StyledForm, StyledButton, StyledInput, StyledSelect } from '../../components';
import { IRequestForm } from './types';

export const RequestForm = ({ previewRef }: IRequestForm) => {
  const [URL, setURL] = useState<string>('http://localhost:8081/users');
  const [requestMethod, setRequestMethod] = useState<string>('get');
  const [requestBody, setRequestBody] = useState<object>({});

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const options =
      requestMethod !== 'get'
        ? {
            method: requestMethod.toUpperCase(),
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
    <StyledForm style={{ width: '40%' }}>
      <StyledInput
        name="url"
        type="text"
        placeholder="URL"
        onChange={urlChangeHandler}
        value={URL}
        title="You can find API documentation in server API.md file"
        required
      />
      <StyledSelect name="method" onChange={methodChangeHandler} value={requestMethod} required>
        <option value="post">POST</option>
        <option value="get">GET</option>
        <option value="delete">DELETE</option>
        <option value="patch">PATCH</option>
      </StyledSelect>
      {requestMethod !== 'get' && requestMethod !== 'delete' ? (
        <>
          <StyledInput
            name="name"
            type="text"
            placeholder="Name"
            title={`Name of ${requestMethod === 'POST' ? 'new' : requestMethod} element`}
            onChange={e => setRequestBody({ name: e.target.value })}
          />
          <StyledInput
            name="age"
            type="number"
            placeholder="Age"
            title={`Age of ${requestMethod === 'POST' ? 'new' : requestMethod} element`}
            onChange={e => setRequestBody(prev => ({ ...prev, age: e.target.value }))}
          />
        </>
      ) : (
        ''
      )}
      <StyledButton onClick={submitHandler} title="Submit request">
        Submit
      </StyledButton>
    </StyledForm>
  );
};
