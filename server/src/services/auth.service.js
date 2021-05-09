import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import RefreshToken from '../models/refresh-token.model';
import User from '../models/user.model';
import yadiskService from './yadisk.service';

const changeUserData = async ({ email, password, nickname, phone, avatar }) => {
  const salt = await bcrypt.genSalt(9);

  let data = {
    email,
    password: password ? await bcrypt.hash(password, salt) : undefined,
    profile: { nickname, phone },
  };

  if (avatar) {
    data = {
      ...data,
      profile: {
        ...data.profile,
        avatar: await yadiskService.upload(avatar),
      },
    };
  }

  return data;
};

const authService = {
  registerUser: async (values) => {
    const existingUser = await User.findOne({ email: values.email });

    if (existingUser) {
      const error = new Error('email is already exists');
      error.param = 'email';
      throw error;
    }

    const data = await changeUserData(values);

    const user = new User(data);

    await user.save();

    return user.toObject();
  },

  changeUser: async (id, values) => {
    console.log(values);
    if (values.email && (await User.findOne({ email: values.email }))) {
      const error = new Error('Такой email уже существует');
      error.param = 'email';
      throw error;
    }
    const data = await changeUserData(values);
    const user = await User.findById(id);
    const response = await user.update(data, { omitUndefined: true });
    return response;
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

    const result = user.toObject();

    delete result.password;

    return result;
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
