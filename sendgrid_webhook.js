const localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'asldkciemdaida' }, (err, tunnel) => {
  if (err) {
    console.log('Error occurred, but continued');
  }

  console.log('LT running');
});
