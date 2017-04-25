import React from 'react';
const { PropTypes } = React;
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router'

const styles = {
  title: {
    cursor: 'pointer',
  },
  container: {
    position: 'fixed',
    top: '0px',
    left: '0px',
  }
};

const Header = ({title, right, onClickRight, ...props}) => (
  <AppBar
    title={<span style={styles.title}>{title}</span>}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label={right} />}
    onLeftIconButtonTouchTap={browserHistory.goBack}
    onRightIconButtonTouchTap={()=>onClickRight()}
    {...props}
  />
);

Header.propTypes = {
  title: PropTypes.string,
  right: PropTypes.string,
  onClickRight: PropTypes.func,
};

Header.defaultProps = {
  title: 'Title',
};

export default Header;
