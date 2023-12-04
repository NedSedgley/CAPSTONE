import Commute from '../models/commute.js';

async function getAllCommutes(_req, res, next) {
  try {
    const commutes = await Commute.find();
    return res.status(200).json(commutes);
  } catch (err) {
    next(err);
  }
}

async function createCommute(req, res, next) {
  try {
    const newCommute = await Commute.create(req.body);
    return res.status(201).send(newCommute);
  } catch (err) {
    next(err);
  }
}

async function getCommute(req, res, next) {
  const { id } = req.params;
  try {
    const commute = await Commute.findById(id);
    res.status(200).send(commute);
  } catch (err) {
    next(err);
  }
}

async function deleteCommute(req, res, next) {
  const { id } = req.params;
  try {
    const commute = await Commute.findByIdAndDelete(id);
    if (!commute) {
      return res.status(404).send({ message: 'Commute does not exist' });
    }

    return res.status(200).json(commute);
  } catch (err) {
    next(err);
  }
}

async function updateCommute(req, res, next) {
  const { id } = req.params;

  try {
    const commute = await Commute.findById(id);

    if (!commute) {
      return res.send({ message: 'No commute found' });
    }

    commute.set(req.body);
    commute.save();

    res.status(200).json(commute);
  } catch (err) {
    next();
  }
}

export default {
  getAllCommutes,
  createCommute,
  getCommute,
  updateCommute,
  deleteCommute,
};
