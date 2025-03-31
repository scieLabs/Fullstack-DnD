import POST from "../schema/schema.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await POST.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostsById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await POST.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { author, title, content, cover, date } = req.body;
    const post = await POST.create({ author, title, content, cover, date });
    res.send({ message: "Post successfully created", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { author, title, content, cover, date } = req.body;
  try {
    const post = await POST.update(
      { author, title, content, cover, date },
      { where: { id } }
    );
    const updatedUser = await User.findByPk(id)
    res.json({ message: "Post updated", updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await POST.destroy({ where: { id } });
    res.send({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
