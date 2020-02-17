import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IncreaseNum, DecreaseNum } from './../actions/inreaseNum'
class Button extends Component {
  constructor(props) {
    super(props);
    this.AddNum = this.AddNum.bind(this)
    this.DecNum = this.DecNum.bind(this)
  }
  AddNum() {
    this.props.IncreaseNum();
  }
  DecNum() {
    this.props.DecreaseNum();
  }
  render() {
    return (
      <div>
        <button onClick={this.AddNum}>
          增加
        </button>
        <hr />
        <button onClick={this.DecNum}>
          减少
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state);
  return ({
    increase: state.increase
  })
}
export default connect(mapStateToProps, { IncreaseNum, DecreaseNum })(Button);
