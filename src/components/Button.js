import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: '5px 0'
  }
}

const Button = ({label, ...props}) => (
  <RaisedButton style={styles.button}
    label={label}
    fullWidth={true}
    primary={true}
    {...props}
  />
)

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'Button',
};

export default Button
