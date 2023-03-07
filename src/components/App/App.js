import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';


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

    return (
      <main className="App">
        {(loading) && <h1>Loading...</h1>}
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={urls}/>
      </main>
    );
}

export default App;
