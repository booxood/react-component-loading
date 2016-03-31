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
    type: PropTypes.string
  }

  static defaultProps = {
    color: 'black',
    width: 60,
    height: 60,
    type: 'square-rotate'
  }

  render() {
    const {color, width, height, type} = this.props
    if (AnimationMap[type]) {
      const AnimationComponent = AnimationMap[type]
      return <AnimationComponent {...{color, width, height}}/>
    } else {
      const alert = `[react-component-loading] Unexpected type: ${type}.
      Only support type: ${Object.keys(AnimationMap)}.
      `
      console.warn(alert)
      return <div>{alert}</div>
    }
  }
}
