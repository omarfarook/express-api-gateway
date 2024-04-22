exports.get = (req, res) => {
  res.json({ message: 'Resource accessed through API gateway' });
};

exports.create = (req, res) => {
  res.json({ message: 'Resource created through API gateway', data: req.body });
};
