import React from 'react'
import { connect } from 'react-redux'
import { fetchLines, addLine } from './actions'

const App = React.createClass ({

  componentDidMount () {
    this.props.dispatch(fetchLines())
  },

  handleLineAdd(ev) {
    this.props.dispatch(addLine({line: ev.target.elements[0].value}))
  },

  render (){
    return (
      <div>
        <div>
          {this.props.lines.map(function(obj){
            return <p key={obj.id}>{obj.line}</p>
          })}
        </div>
        <form onSubmit={(ev)=> this.handleLineAdd(ev)}>
          <input type="text" name="line" placeholder="Add the next sentence" />
          <button type="submit">Add</button>
        </form>
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
