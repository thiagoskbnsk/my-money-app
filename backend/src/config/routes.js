const express = require('express')

module.exports = function(server) {
    // DEFINE DEFAULT URL TO ALL ROUTES
    const router = express.Router()
    server.use('/api', router)

    // PAYMENT CYCLE ROUTES
    const BillingCycle = require('../api/BillingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}
