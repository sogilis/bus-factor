import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ComponentPresenter.css';

class ComponentPresenter extends Component {
  buildTextComponent() {
    const { componentName, componentProps: { children, ...otherProps } } = this.props;
    const propsList = Object.entries(otherProps);
    const textProps = propsList.map(([propName, propValue]) => {
      const escapedPropValue = typeof propValue === 'string' ? `"${propValue}"`
                             : typeof propValue === 'function' ? `{${propValue}}`.replace(/\s+/g, ' ')
                             : `{${propValue}}`;
      return `  ${propName}=${escapedPropValue}`;
    }).join('\n');
    return `<${componentName}\n${textProps}\n>\n  ${children}\n</${componentName}>`;
  }

  render() {
    const { componentProps } = this.props;
    const ComponentToPresent = this.props.component;
    return (
      <div className="component-presenter">
        <div className="component-presenter-visualizer">
          <ComponentToPresent { ...componentProps } />
        </div>
        <div className="component-presenter-code">
          { this.buildTextComponent() }
        </div>
      </div>
    );
  }
}

ComponentPresenter.propTypes = {
  component: PropTypes.func.isRequired,
  componentName: PropTypes.string.isRequired,
  componentProps: PropTypes.object.isRequired,
};

export default ComponentPresenter;
