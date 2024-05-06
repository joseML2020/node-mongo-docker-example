
const dotenv = require('dotenv')
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST:  process.env.HOST || '127.0.0.1',
    PORT:  process.env.PORT || 8443,
    MONGODB_USER: process.env.MONGODB_USER || 'root',
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || 'root',
    MONGODB_HOSTNAME: process.env.MONGODB_HOST || 'localhost' ,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE || 'crud',
    MONGODB_PORT: process.env.MONGODB_PORT || 27017,
    MONGODB_URL: process.env.MONGODB_URL || `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}
    `
  }