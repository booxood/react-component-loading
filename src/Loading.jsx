import React, {Component, PropTypes} from 'react'

import SquareArrange from './animates/SquareArrange'
import SquareRotate from './animates/SquareRotate'

const AnimationMap = {
  'square-arrange': SquareArrange,
  'square-rotate': SquareRotate
}

export default class Loading extends Component {
  static propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    delay: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    type: 'square-rotate'
  }

  render() {
    const {color, width, height, delay, type} = this.props
    if (AnimationMap[type]) {
      const AnimationComponent = AnimationMap[type]
      return <AnimationComponent {...{color, width, height, delay}}/>
    } else {
      const alert = `[react-component-loading] Unexpected type: ${type}.
      Only support type: ${Object.keys(AnimationMap)}.
      `
      console.warn(alert)
      return <div>{alert}</div>
    }
  }
}
