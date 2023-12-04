import express from 'express';
import commutesController from '../controllers/commutesController.js';

const Router = express.Router();

Router.route('/commutes')
  .get(commutesController.getAllCommutes)
  .post(commutesController.createCommute);

export default Router;
