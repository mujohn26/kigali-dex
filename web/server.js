import  express from 'express';
import path from 'path';
const port = process.env.PORT || 8080;
const app = express();
// app.use(express.static(`${__dirname}/dist`));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});
app.listen(port, () => console.log(`Listening on port ${port}......`));