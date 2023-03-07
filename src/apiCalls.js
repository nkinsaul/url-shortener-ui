
export const postUrl = (longUrl, title) => {
  console.log('longUrl', longUrl, 'title', title)
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    body: JSON.stringify({
      long_url: longUrl,
      title: title
    }),
    headers: {
      "Content-type": "application/json"
    },
  })
  .then(response => {
    if(response.ok) {
      console.log('response', response)
      return response.json()
    } else {
      throw new Error(response.status)
    }
  })
  .catch(error => error)
}

export const updateUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(response.status)
    }
  })
  .catch(error => error)
}