import React from 'react'

const styles = {
  label: {
    width: '100%',
    fontSize: '16px',
    backgroundColor: 'skyBlue',
    lineHeight: '200%',

  }
}

const Label = ({children}) => (
  <label style={styles.label}>{ children }</label>
)

export default Label
