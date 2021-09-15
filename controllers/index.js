const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const dashRoutes = require('./dash-routes.js');
const apiRoutes = require('./api/index-routes');

router.use('/', homeRoutes);
router.use('/dash', dashRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;