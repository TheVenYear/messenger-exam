import config from '.';

console.log(config.NODE_ENV);

const whitelist =
  config.NODE_ENV === 'production'
    ? [config.HOST]
    : [`http://localhost:${config.PORT}`];

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
