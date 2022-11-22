import Router from 'express';
import Post from './Post.js';

const router = new Router();

router.post('/posts', async (req, res) => {
   try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.status(200).json(post);
   } catch (error) {
      res.status(500).json(error);
   }
});
router.post('/posts');
router.post('/posts/:id');
router.post('/posts');
router.post('/posts/:id');

export default router;
