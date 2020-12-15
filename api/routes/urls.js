const urlService = require('../data-services/urls')

const { Router } = require('express')

const router = Router()

router.get('/url', function (req, res, next) {
  res.json(urlService.getAll())
})

router.get('/url/:id', function (req, res, next) {
  try {
    const url = urlService.getById(req.params.id)

    if (!url) {
      res.sendStatus(404)
      return
    }

    res.json(url)    
  } catch (err) {
    next(err)
  }
})

router.post('/url', function (req, res, next) {
  try {
    const url = urlService.createUrl(req.query.url)

    res.json(url)    
  } catch (err) {
    next(err)
  }
})

module.exports = router