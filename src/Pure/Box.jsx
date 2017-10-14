import React from 'react';

/**
 * A simple box, with opacity driven by a prop.
 */
const Box = ({opacity}) =>
  <div style={styles.box(opacity)}>
    { opacity }
  </div>;

export default Box;

/**
 * Box component styles
 */
const styles = {
  box: (opacity) => {
    return {
      opacity: `${opacity}`,
      margin: '16px',
      width: '50%',
      height: '50%',
      backgroundColor: `rgb(${opacity}, ${opacity}, 50)`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'rgb(42, 144, 150)',
      fontFamily: 'Libre Barcode 39 Extended Text',
      fontSize: '5vmin'
    };
  }
};
