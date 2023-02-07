const getAllPosts = async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getPublicPosts = async (req, res) => {
  res.send("für alle sichtbar");
};

module.exports = { getAllPosts, getPublicPosts };
