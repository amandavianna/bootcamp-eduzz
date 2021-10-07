//The fetch API is not implemented in Node.

fetch('./data.json')
  .then(responseStream => {
    console.log(responseStream)
    if(responseStream.status === 200) {
      responseStream.json()
    }

    throw new Error('Request error')
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
