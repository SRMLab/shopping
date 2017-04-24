import React, { PropTypes }  from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import _ from 'underscore'

const InputSelect = ({label, value, onChange, options, ...props}) => (
  <SelectField
    floatingLabelText={label}
    value={value}
    onChange={onChange}
    fullWidth={true}
    {...props} >
    { options.map((option, key) => (
      <MenuItem key={key} value={key} primaryText={option} />
    ))}
  </SelectField>
)

InputSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  options: PropTypes.array,
};

InputSelect.defaultProps = {
  label: 'Input Select',
};

export default InputSelect
