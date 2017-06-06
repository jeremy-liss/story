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

export { receiveLines, fetchLines }
