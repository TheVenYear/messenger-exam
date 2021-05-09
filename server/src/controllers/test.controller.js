import User from '../models/user.model';
import yadiskService from '../services/yadisk.service';

const testController = {
  messages: async (req, res) => {
    const io = req.app.get('socket');
    const user = (await User.findOne({ _id: req.user._id })).toObject();
    io.emit('message', { user, message: req.body.message });
    return res.send({ data: { message: req.body.message }, errors: [] });
  },
  upload: async (req, res) => {
    try {
      const previewUrl = await yadiskService.upload(req.files.avatar);
      return res.send({ data: previewUrl, errors: [] });
    } catch (error) {
      return res.send({ data: null, errors: [{ global: error.message }] });
    }
  },
};

export default testController;
