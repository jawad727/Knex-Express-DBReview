const router = require('express').Router();

router.get('/project/:id', (req, res) => {
    const id = req.params.id

    ptDB
    .getById(id)

    .then(project => {

    ptDB
    .getActionById(id)
    .then( actionsArray => {
        
        res.status(200).json({...project, actions: actionsArray})

        })
    })
    .catch(error => {
        res.status(500).json({
            error: 'There was an error'
        })
    })
})