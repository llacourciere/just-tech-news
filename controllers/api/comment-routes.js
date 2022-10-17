const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {

});

router.post('/', ({body}, res) => {
    Comment.create({
        ...body
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.post('/', (req, res) => {
    //check the session
    if (req.session) {
        Comment.create({ 
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.body.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
})
router.delete('/:id', (req, res) => {

});

module.exports = router;