
export const postUrl = (longUrl, title) => {
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
      return response.json()
    } else {
      throw new Error(response.status)
    }
  })
  .catch(error => error)
}
