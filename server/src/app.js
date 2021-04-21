import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';

import routes from './routes';
import config from './config';

const app = express();

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));
app.use(cors());
app.use(cookieParser());

app.use('/api', routes);

connect(config.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
