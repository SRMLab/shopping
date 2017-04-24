import React, { PropTypes }  from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import _ from 'underscore'

const InputSelectMultiple = ({label, values, onChange, options, ...props}) => {
  console.log(values)
  const menuItems = (values) => {
    return options.map((option) => (
      <MenuItem
        key={option}
        insetChildren={true}
        checked={values && values.includes(option)}
        value={option}
        primaryText={option}
      />
    ));
  }
  return (
  <SelectField
    multiple={true}
    hintText={label}
    value={values}
    onChange={onChange}
    >
    {menuItems(values)}
  </SelectField>
)
}

InputSelectMultiple.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  values: PropTypes.array,
};

InputSelectMultiple.defaultProps = {
  label: 'Input Select',
};

export default InputSelectMultiple
