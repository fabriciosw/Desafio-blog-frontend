import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';

const inputColor = '#17171A';
const textsColor = '#EAEAEA';
const focusColor = '#4b5efb';

const StyledTextField = styled(TextField)(() => ({
  '& label.Mui-focused': {
    color: textsColor,
    fontSize: 18,
  },
  '& label': {
    color: textsColor,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 8,
    },
    '&.Mui-focused fieldset': {
      borderColor: focusColor,
    },
  },
  '& .MuiInputBase-input': {
    backgroundColor: inputColor,
    borderRadius: 8,
    color: textsColor,
    '&:focus': {
      boxShadow: `${alpha(focusColor, 0.25)} 0 0 0 0.2rem`,
      borderColor: focusColor,
    },
  },
}));

const Input: React.FunctionComponent<TextFieldProps> = (textFieldProps: TextFieldProps): React.ReactElement => (
  <StyledTextField {...textFieldProps} />
);

export default Input;
