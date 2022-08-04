const sequelize = require('../config/connection')
const {Plant} = require('../models')

const plantSeedData = require('./plantSeedData.json')

const seedDatabase = async () => {
    await sequelize.sync({force: true})

    for (const plant of plantsSeedData){
        const newPlant = await plant.create({
            ...plant
        })
    }

    process.exit(0)
}

seedDatabase();