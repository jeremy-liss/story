import request from 'superagent'

const receiveLines = (lines) => {
  return {
    type: 'RECEIVE_LINES',
    lines: lines.map(line => line)
  }
}

const fetchLines = () => {
  return (dispatch) => {
    request
      .get(`/v1/lines`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveLines(res.body))
      })
  }
}

const addLine = (line) => {
  return (dispatch) => {
    request
      .post(`/v1/lines`)
      .send(line)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveLines(res.body))
      })
  }
}

const delLine = (id) => {
  return (dispatch) => {
    request
    .delete(`/v1/lines`)
    .send(id)
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveLines(res.body))
    })
  }
}

export { fetchLines, addLine, delLine }
