import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import { Category } from './category.entity.ts'; // Import the Category entity

import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://adminjs:adminjs@localhost:5435/adminjs', {
  dialect: 'postgres',
})

export default sequelize


const PORT = 4000

const start = async () => {
  const app = express()

  const admin = new AdminJS({ resources: [Category] })

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()