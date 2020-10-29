const express = require('express');
const router = express.Router();
const { Post, User, Image, Comment } = require('../models');

router.get('/', async (req, res, next) => {
  // GET /posts
  try {
    const posts = await Post.findAll({
      //   offset: 0, // 1 ~ 10 추가/삭제 문제
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
