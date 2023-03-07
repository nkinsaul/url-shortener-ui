import React, { useState } from 'react';
import { postUrl } from '../../apiCalls';

const UrlForm = () => {
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    postUrl(urlToShorten, title)
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('')
    setUrlToShorten('')
  }

    return (
      <form onSubmit={() => handleSubmit()}>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={urlToShorten}
          onChange={(e) => setUrlToShorten(e.target.value)}
        />

        <button onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button>

        {/* <input 
          type="submit" value="Shorten please!"
        /> */}

      </form>
    )
}

export default UrlForm;


