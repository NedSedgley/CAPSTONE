import express from 'express';
import commutesController from '../controllers/commutesController.js';

const Router = express.Router();

Router.route('/traveller/:traveller').get(
  commutesController.getTravellerCommutes
);

Router.route('/commutes/:id')
  .get(commutesController.getCommute)
  .put(commutesController.updateCommute)
  .delete(commutesController.deleteCommute);

Router.route('/commutes')
  .get(commutesController.getAllCommutes)
  .post(commutesController.createCommute);

export default Router;
