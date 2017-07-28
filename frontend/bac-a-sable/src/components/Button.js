import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  render() {
    const { type, onClick, icon, children } = this.props;
    return (
      <button className={`button ${type}`} onClick={onClick}>
        { icon && (
          <i className={`fa fa-fw fa-${icon}`} />
        ) }
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
