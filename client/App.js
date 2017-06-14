import React from 'react'
import { connect } from 'react-redux'
import { fetchLines, addLine, delLine } from './actions'

import Lines from './Lines'

class App extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchLines())
  };

  handleLineAdd(ev) {
    this.props.dispatch(addLine({line: ev.target.elements[0].value}))
  };

  render (props){
    const length = this.props.lines.length
    return (
      <div>
        <h1>Add The Next Sentence To This Story If It Pleases You</h1>
        <div className='story'>
          <div>
            {this.props.lines.map(function(obj, i){
              return <Lines line={obj.line} id={obj.id} key={obj.id} i={i} length={length} />
            })}
          </div>
          <form onSubmit={(ev)=> this.handleLineAdd(ev)}>
            <input type="text" name="line" placeholder="Add the next sentence" />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lines: state.lines
  }
}

export default connect(mapStateToProps)(App)
