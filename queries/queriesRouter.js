const router = require('express').Router()
const db = require('./queriesHelper')


router.get(`/user`, (req, res) => {
    // const ID = req.params.id

    db
    .getUser()
    .then(user => {


        res.status(200).json({
            ...user
        })


    })
    .catch(err => {
        res.status(500).json({message: "there was an error"})
    })

})

router.post('/register', (req, res) => {
    let user = req.body;

    db
    .add(user)
    .then(info => {

        res.status(201).json({...info})
    })
    .catch(err => {
        res.status(500).json(err)
    })

})

module.exports = router;