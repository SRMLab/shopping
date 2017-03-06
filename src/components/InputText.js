import React, { PropTypes }  from 'react';
import TextField from 'material-ui/TextField';

const InputText = ({label, placeholder, value, onChange, ...props}) => (
  <TextField
    floatingLabelText={label}
    hintText={placeholder}
    value={value}
    onChange={onChange}
    fullWidth={true}
    {...props}
  />
)

InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  label: 'Input Text',
};

export default InputText
