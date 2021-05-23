import config from '.';

const corsSettings = {
  origin:
    config.NODE_ENV === 'production'
      ? 'https://thevenyear.github.io/messenger-exam/'
      : 'http://localhost:3000',
  credentials: true,
};

export default corsSettings;
