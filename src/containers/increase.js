import React, { Component } from 'react'
import { connect } from 'react-redux';
class Increase extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                这是增加数据：
                {this.props.increase}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    increase:state.increase
  })
export default connect(mapStateToProps,null)(Increase);
