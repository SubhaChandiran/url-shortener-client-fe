import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/shorten', {
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
          <a href={`http://localhost:5000/${shortUrl}`} target="_blank" rel="noopener noreferrer">
            {`http://localhost:5000/${shortUrl}`}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
