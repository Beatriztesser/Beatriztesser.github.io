// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

const config= {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_BASE,
    "database": process.env.DB_HOST,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_BASE,
    "database": process.env.DB_HOST,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
   "username": process.env.DB_USER,
    "password": process.env.DB_BASE,
    "database": process.env.DB_HOST,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  }
}

export default config;