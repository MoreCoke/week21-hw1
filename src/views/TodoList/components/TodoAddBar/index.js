import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import { PrimaryButton } from 'components/Button';
import { TextInput } from 'components/TextInput';

const TodoAddBarWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const TextInputWrapper = styled.div`
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
  padding-left: 15px;
  padding-right: 15px;
`;

const ButtonWrapper = styled.div`
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
  padding-left: 15px;
  padding-right: 15px;
`;

export default function TodoAddBar(props) {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = () => {
    if (!inputValue) return;
    props?.onClick?.(inputValue);
    setInputValue('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <TodoAddBarWrapper>
      <TextInputWrapper>
        <TextInput
          onChange={onChange}
          onKeyPress={onKeyPress}
          value={inputValue}
        />
      </TextInputWrapper>
      <ButtonWrapper>
        <PrimaryButton onClick={onClick}>新增</PrimaryButton>
      </ButtonWrapper>
    </TodoAddBarWrapper>
  );
}
