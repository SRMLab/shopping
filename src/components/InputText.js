import React, { PropTypes }  from 'react';
import TextField from 'material-ui/TextField';

const InputText = ({label, placeholder, ...props}) => (
  <TextField
    floatingLabelText={label}
    hintText={placeholder}
    fullWidth={true}
    {...props}
  />
)

InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

InputText.defaultProps = {
  label: 'Input Text',
};

export default InputText
