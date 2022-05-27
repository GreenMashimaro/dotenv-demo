const dotenv = require('dotenv')
const path = require('path')
const dotenvExpand = require('dotenv-expand')

const developFilePath = path.resolve(__dirname, '.env.development')
const env = dotenv.config({
  path: developFilePath,
  debug: process.env.DEBUG 
})

dotenvExpand.expand(env)

Object.entries(env.parsed).forEach(([key, value]) => {
  process.env[key] = value
})
console.log(process.env)
