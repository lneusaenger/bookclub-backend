const Email = require('../models/emails');
const mongoose = require('mongoose');

// get a single email
const getEmail = async (req, res) => {
  const { address } = req.params;
  const email = await Email.findOne({ address });

if (!email) {
    return res.status(404).json({ error: 'No such email to get' });
} else{
    res.status(200).json(email);
}
};

module.exports = {
  getEmail,
};
