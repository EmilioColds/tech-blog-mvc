const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.userID, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        loggedIn: true,
    });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if(postData) {
            const post = postData.get({ plain: true });

            res.render('edit-post', {
                post,
                loggedIn: true
            });
        } else {
            res.status(404).json({ message: 'There`s no post with that ID.' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/edit/:id', withAuth, async (req, res) => {
    try {
        const result = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                    userID: req.session.UderID,
                },
            }
        );

        if (result > 0) {
            res.json({ message: 'The post has been updated!' });
        } else {
            res.status(404).json({ message: 'There`s no post with that ID.' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/delete/:id', withAuth, async (req, res) => {
    try {
        const result = await Post.destroy({
            where: {
                id: req.params.id,
                userID: req.session.userID,
            },
        });

        if(result > 0) {
            res.json({ message: 'The post has been deleted!' });
        } else {
            res.status(404).json({ message: 'There`s no post with that ID.' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;