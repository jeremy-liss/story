import React from 'react'
import { connect } from 'react-redux'
import { delLine } from './actions'

const Lines = (props) =>{

  const handleDelLine = (id) => {
    props.dispatch(delLine({id: id}))
  }

  return (
    <p>
      {props.line}
      {props.i===props.length-1 && <button onClick={()=> handleDelLine(props.id)}>remove</button>}
    </p>
  )

}

const mapStateToProps = (state) => {
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Lines)
