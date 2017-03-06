import React, { PropTypes }  from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const AutoSelect = ({label, placeholder, value, onChange, options, ...props}) => (
  <AutoComplete
    floatingLabelText={label}
    hintText={placeholder}
    value={value}
    onNewRequest={onChange}
    filter={AutoComplete.noFilter}
    openOnFocus={true}
    dataSource={options}
    fullWidth={true}
    {...props} />
)

AutoSelect.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  options: PropTypes.array,
};

AutoSelect.defaultProps = {
  label: 'Auto Select',
};

export default AutoSelect
