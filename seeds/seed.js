const sequelize = require('../config/connection')
const {User, Plant} = require('../models')

const userData = require('./userData.json')
const plantSeedData = require('./plantSeed.js')

const seedDatabase = async () => {
    await sequelize.sync({force: true})

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    })

    await plantSeedData();
   

    process.exit(0)
}

seedDatabase();