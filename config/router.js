import express from 'express';

const Router = express.Router();

Router.route('/movies').get((req, res) => {
  res.send('Hello Movies!');
});

export default Router;
