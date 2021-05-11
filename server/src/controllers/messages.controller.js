import User from "../models/user.model";

const messagesController = {
  messages: async (req, res) => {
    const io = req.app.get("socket");
    const user = (await User.findOne({ _id: req.user._id })).toObject();
    io.emit("message", { user, message: req.body.message });
    return res.send({ data: { message: req.body.message }, errors: [] });
  },
};

export default messagesController;
