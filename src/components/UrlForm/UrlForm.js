import React, { useState } from 'react';
import { postUrl, updateUrls } from '../../apiCalls';

const UrlForm = ({updateUrls}) => {
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    clearInputs();
    updateUrls(urlToShorten, title);
  }

  const clearInputs = () => {
    setTitle('')
    setUrlToShorten('')
  }

    return (
      <form>
        <input
          data-cy='title-input'
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          data-cy='url-to-shorten'
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={urlToShorten}
          onChange={(e) => setUrlToShorten(e.target.value)}
        />

        <button data-cy='submit' onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button>

      </form>
    )
}

export default UrlForm;


