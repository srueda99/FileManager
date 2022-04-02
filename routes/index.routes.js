const {Router} = require('express');
const {getBuckets} = require('../aws');
const router = Router();

router.get('/', async (req, res) => {
    const list = await getBuckets();
    console.log(list.Buckets);
    res.render('index', {
        buckets: list.Buckets
    });
});

module.exports = router;