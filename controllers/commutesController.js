const getAllCommutes = (req, res) => {
  res.send('getAllCommutes');
};
const createCommute = (req, res) => {
  res.send('createCommute');
};
const getCommute = (req, res) => {
  res.send(`getCommute ${req.params.id}`);
};
const updateCommute = (req, res) => {
  res.send(`updateCommute ${req.params.id}`);
};
const deleteCommute = (req, res) => {
  res.send(`deleteCommute ${req.params.id}`);
};

export default {
  getAllCommutes,
  createCommute,
  getCommute,
  updateCommute,
  deleteCommute,
};
