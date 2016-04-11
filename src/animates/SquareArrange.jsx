import React, {Component, PropTypes} from 'react'

import style from './SquareArrange.css'

function add(t1, t2) {
  return ((+t1.slice(0, -1)) + (+t2.slice(0, -1))) + 's'
}

export default class SquareArrange extends Component {
  static propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    delay: PropTypes.string
  }

  static defaultProps = {
    color: 'black',
    width: 60,
    height: 60,
    delay: '0s'
  }

  render() {
    const {color, width, height, delay} = this.props
    const modal = {
      backgroundColor: color,
      width: width/2,
      height: height/10,
      marginBottom: height/5,
      animation: `${style.animate} 0.8s infinite`
    }
    const one = {animationDelay: add('0s', delay)}
    const two = {animationDelay: add('0.2s', delay)}
    const three = {animationDelay: add('0.4s', delay)}
    return <div>
      <div style={{...modal, ...one}}></div>
      <div style={{...modal, ...two}}></div>
      <div style={{...modal, ...three}}></div>
    </div>
  }
}
