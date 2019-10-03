// code away!

require('dotenv').config()

// Imports
const server = require('./server.js');


server.get('/', (req, res) => {
    res.send(
      `
      <h2>Here are my end points!</h2>
      <ul>
        <li> POST - /api/users --> Create New User </li>
        <li> POST - /api/users/:id/posts --> Create New Post for a User</li>
        <li> GET - /api/users --> Retrieve all Users </li>
        <li> GET - /api/users/:id --> Retrieve Specific User </li>
        <li> GET - /api/users/:id/posts --> Retrieve Specific User Post </li>
        <li> DELETE - /api/users/:id --> Remove a Specific User </li>
        <li> PUT - /api/users/:id --> Update a Specific User </li>
      </ul>
    `
    )
  });

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('\n*** Server is running on port 5000 ***\n')
})
