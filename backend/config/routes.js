const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const knifeDataService = require('../api/knifeData/knifeDataService')
  knifeDataService.register(router, '/knifesData')

  const userDataService = require('../api/userData/userDataService')
  userDataService.register(router, '/usersData')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
