import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({urls}) => {

  const urlContainer = urls.map(url => {
    return (
      <div data-cy={url.id} key={url.id} id={url.id} className="url">
        <h3 data-cy={`${url.id}-title`}>{url.title}</h3>
        <a data-cy={`${url.id}-short-url`} href={url.short_url} target="blank">{url.short_url}</a>
        <p data-cy={`${url.id}-long-url`} >{url.long_url}</p>
      </div>
    )
  })

  return (
    <section>
      { urlContainer.length ? urlContainer : 
      <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
