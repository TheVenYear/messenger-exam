const passSocket = (io) => (req, res, next) => {
  req.io = io;
  next();
};

export default passSocket;
