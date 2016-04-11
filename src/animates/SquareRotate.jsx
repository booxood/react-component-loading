import React, {Component, PropTypes} from 'react'

import style from './SquareRotate.css'

export default class SquareRotate extends Component {
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

    const animation = {
      width,
      height,
      backgroundColor: color,
      animation: `${style.animate} 1s infinite ease-in-out`,
      animationDelay: delay
    }
    return <div style={animation}></div>
  }
}
