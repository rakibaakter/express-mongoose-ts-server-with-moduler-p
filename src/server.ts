import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  await mongoose.connect(config.database_url as string);

  try {
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
