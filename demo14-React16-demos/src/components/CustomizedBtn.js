import React from 'react';

export class Btn extends React.Component {
  render() {
    return <button style={{color: this.props.color}}>{this.props.desc}</button>
  }
}

export const customizedBtn = (WrappedComponent, config) => 
  class CustomizedBtn extends React.Component {
    render() {
      let props = {
        ...this.props,
        color: config.color
      }
      return <WrappedComponent {...props} />
    }
  }

export const customizedBtn2 = (config) => (WrappedComponent) => 
  class CustomizedBtn extends React.Component {
    render() {
      let props = {
        ...this.props,
        color: config.color
      }
      return <WrappedComponent {...props} />
    }
  }