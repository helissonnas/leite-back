const app = require('express')();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`🥛 listening on port ${port}!`));
