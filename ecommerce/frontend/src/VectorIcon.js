import React from 'react';
import ReactDOM from 'react-dom';
import styles from './VectorIcon.module.css';
import VectorIconImage from './Vector.png';

class VectorIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cssClass: styles.vectorIcon1,
      imageUrl: VectorIconImage
    };
  }

  render() {
    const { cssClass, imageUrl } = this.state;

    return (
      <img className={cssClass} alt="" src={imageUrl} />
    );
  }
}

ReactDOM.render(<VectorIcon />);

