import config from '.';

const whitelist =
  config.NODE_ENV === 'production'
    ? [config.HOST]
    : ['http://localhost:3000/', `http://localhost:${config.PORT}/`];

const corsSettings = {
  origin: (origin, callback) => {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Заблокировано политикой CORS'));
    }
  },
  credentials: true,
  preflightContinue: true,
};

export default corsSettings;
