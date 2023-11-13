// COME BACK
const https = require('https');

// Function to fetch the content of a URL and return a Promise
function fetchContent(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      // A chunk of data has been received.
      response.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      response.on('end', () => {
        resolve(data);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// Example usage
const url = 'https://www.google.com';
fetchContent(url)
  .then((content) => {
    console.log(content);
  })
  .catch((error) => {
    console.error(`Error fetching content: ${error.message}`);
  });
