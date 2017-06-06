import React from 'react'
import { connect } from 'react-redux'
import { fetchLines } from './actions'

const App = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchLines())
  },

  render (){
    return (
      <div>
      {this.props.lines.map(function(obj){
        return <p key={obj.id}>{obj.line}</p>
      })}
     </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    lines: state.lines
  }
}

export default connect(mapStateToProps)(App)
