import sequelize from './index.js'

const sequelize = new Sequelize('postgres://adminjs:adminjs@localhost:5435/adminjs', {
  dialect: 'postgres',
})

export { sequelize }