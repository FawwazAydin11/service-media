var express = require('express');
var router = express.Router();
const Post = require('../models/PostModel');

// CREATE - menambahkan postingan baru
router.post('/', async (req, res) => {
  try {
    const { title, content, user_id, media_url } = req.body;

    const post = await Post.create({
      title,
      content,
      user_id,
      media_url
    });

    res.status(201).json({
      message: 'Post berhasil ditambahkan',
      data: post
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menambahkan post',
      error: error.message
    });
  }
});

// READ - menampilkan semua postingan
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();

    res.status(200).json({
      message: 'Data post berhasil diambil',
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil data post',
      error: error.message
    });
  }
});

// READ DETAIL - menampilkan postingan berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: 'Post tidak ditemukan'
      });
    }

    res.status(200).json({
      message: 'Detail post berhasil diambil',
      data: post
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil detail post',
      error: error.message
    });
  }
});

// UPDATE - mengubah postingan berdasarkan ID
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: 'Post tidak ditemukan'
      });
    }

    const { title, content, user_id, media_url } = req.body;

    await post.update({
      title,
      content,
      user_id,
      media_url
    });

    res.status(200).json({
      message: 'Post berhasil diperbarui',
      data: post
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal memperbarui post',
      error: error.message
    });
  }
});

// DELETE - menghapus postingan berdasarkan ID
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: 'Post tidak ditemukan'
      });
    }

    await post.destroy();

    res.status(200).json({
      message: 'Post berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menghapus post',
      error: error.message
    });
  }
});

module.exports = router;