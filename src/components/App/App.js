import React, { useEffect, useState } from 'react';
import './App.css';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { postUrl } from '../../apiCalls';

const App = () => {
  const [urls, setUrls] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getUrls = async () => {
    const url = 'http://localhost:3001/api/v1/urls'
   setError('')

    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw new Error(response.status)
      }
      const urls = await response.json()
      setUrls(urls.urls)
      setLoading(false)
    } catch(error) {
      setError(error)
    }
  }

  useEffect(() => {
    getUrls()
  },[])

  const updateUrls = (urlToShorten, title) => {
    postUrl(urlToShorten, title)
    getUrls()
  }

    return (
      <main className="App">
        {(loading) && <h1>Loading...</h1>}
        <header>
          <h1 data-cy='header'>URL Shortener</h1>
          <UrlForm updateUrls={updateUrls}/>
        </header>

        <UrlContainer urls={urls}/>
      </main>
    );
}

export default App;
