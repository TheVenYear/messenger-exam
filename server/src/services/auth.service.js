import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import RefreshToken from '../models/refresh-token.model';
import User from '../models/user.model';

const authService = {
  registerUser: async ({ email, password }) => {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error('email is already exists');
      error.param = 'email';
      throw error;
    }

    const salt = await bcrypt.genSalt(9);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = new User({ email, password: encryptedPassword });

    await user.save();

    return user.toObject();
  },

  loginUser: async ({ email, password }) => {
    const MESSAGE = 'email or password are incorrect';
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(MESSAGE);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error(MESSAGE);
    }

    return user.toObject();
  },

  createRefresh: async ({ _id, email, status }) => {
    const token = jwt.sign({ _id, email, status }, config.REFRESH_SECRET, {
      expiresIn: config.REFRESH_EXPIRES_IN,
    });

    const refreshToken = new RefreshToken({ value: token });

    await refreshToken.save();

    return refreshToken.toObject().value;
  },

  deleteRefresh: async (value) => {
    await RefreshToken.deleteOne({ value });
  },

  validateRefresh: async (token) => {
    jwt.verify(token, config.REFRESH_SECRET);

    const refreshToken = await RefreshToken.findOne({ value: token });

    if (!refreshToken) {
      throw new Error('invalid token');
    }

    return token;
  },

  createAccess: (refreshToken) => {
    const { _id, email, status } = jwt.verify(
      refreshToken,
      config.REFRESH_SECRET
    );
    const token = jwt.sign({ _id, email, status }, config.ACCESS_SECRET, {
      expiresIn: config.ACCESS_EXPIRES_IN,
    });
    return token;
  },
};

export default authService;
