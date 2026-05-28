const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'HINATA_Empty',
    ALIVE_IMG: process.env.ALIVE_IMG || 'https://telegra.ph/file/266c2fd2f02f23605e71c.jpg',
    ALIVE_MSG: process.env.ALIVE_MSG || 'QUEEN HINATA IS ALIVE AND WORKING PERFECTLY...',
    PORT: process.env.PORT || 8000,
    MODE: process.env.MODE || 'public',
    PREFIX: process.env.PREFIX || '.',
    SESSION_URL: 'https://cyberx-session-production.up.railway.app/pair', // یہاں نیا اور ایکٹیو پیئرنگ سرور لنک ڈال دیا ہے
    AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, 'true'),
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, { dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false } }, logging: false })
};
      
