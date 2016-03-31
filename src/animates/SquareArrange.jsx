import React, { Component, PropTypes } from 'react'

import style from './SquareArrange.css'

export default class SquareArrange extends Component {
  static propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }

  render() {
    const { color, width, height } = this.props
    const modal = {
      backgroundColor: color,
      width: width/2,
      height: height/10,
      marginBottom: height/5
    }
    return <div className={style.animation} style={{width, height}}>
      <div className={style.one} style={modal}></div>
      <div className={style.two} style={modal}></div>
      <div className={style.three} style={modal}></div>
    </div>
  }
}
