import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = async () => {
    try {
      const response = await axios.post('https://ulr-shortener-client-be.onrender.com/api/shorten', {
        originalUrl,
      });

      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter the URL to shorten"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={shortenUrl}>Shorten URL</button>
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={`https://ulr-shortener-client-be.onrender.com/${shortUrl}`} target="_blank" rel="noopener noreferrer">
            {`https://ulr-shortener-client-be.onrender.com/${shortUrl}`}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
