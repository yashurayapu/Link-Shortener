document.getElementById('urlForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const longUrlInput = document.getElementById('longUrl');
    const longUrl = longUrlInput.value;
  
    try {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'd7aea69cdf0a88e6c3536ea1fb123d5552e571c6'
        },
        body: JSON.stringify({ long_url: longUrl })
      });
  
      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }
  
      const data = await response.json();
      const shortenedUrl = data.link;
  
      document.getElementById('shortenedUrl').innerHTML = `<a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>`;
    } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('shortenedUrl').innerHTML = 'Failed to shorten URL';
    }
  });
  