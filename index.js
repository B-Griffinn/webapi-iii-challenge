// code away!

require('dotenv').config()

// Imports
const server = require('./server.js');


server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`)
  });

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('\n*** Server is running on port 5000 ***\n')
})

