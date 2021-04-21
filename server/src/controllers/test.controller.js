const testController = {
  messages: (req, res) => {
    req.io.emit('message', 'хуй');
    return res.send('test');
  },
};

export default testController;
