const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_POST } = process.env;

const api = apiAdapter(URL_SERVICE_POST);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await api.put(`/posts/${id}`, req.body);
    return res.status(post.status).json(post.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({
        status: 'error',
        message: 'post service unavailable'
      });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};