const testController = {
  messages: (req, res) => {
    req.io.emit('message', req.body.message);
    return res.send(req.body.message  );
  },
};

export default testController;
