const superstatic = require('superstatic');
const app = superstatic();

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

app.use(superstatic.static('public'));
app.use(superstatic.json({ limit: '1mb' }));

// const database = new Datastore('database.db');
// database.loadDatabase();