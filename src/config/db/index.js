const mongooseose = require('mongoose');

async function connect() {
    try {
        await mongooseose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect successfully.');
    } catch (error) {
        console.log('Connect faliure.');
    }
}

module.exports = { connect };
