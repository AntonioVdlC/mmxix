const notImplemented = (req, res) => {
  res.status(405);
  res.send({
    error: "Method not implemented",
    reason: `'${req.method}' is not implemented for this endpoint. Maybe you were trying to send a 'GET' request instead?`
  });
};

module.exports = notImplemented;
