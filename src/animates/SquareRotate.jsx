import React, {Component, PropTypes} from 'react'

import style from './SquareRotate.css'

export default class SquareRotate extends Component {
  static propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }

  render() {
    const { color, width, height } = this.props
    return <div className={style.animation} style={{backgroundColor: color, width, height}}></div>
  }
}
