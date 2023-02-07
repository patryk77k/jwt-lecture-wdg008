const User = require("../models/User");

const checkLogin = async (req, res, next) => {
  console.log("check in CheckLogin middleware");
  const { email } = req.body;
  try {
    const [user] = await User.find({ email });
    if (!user) {
      return res
        .status(404)
        .send("No user with this mail address exists. Please sign up first.");
    }
    //wir erstellen eine neue Property mit allen Infos aus DB für diesen User
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = checkLogin;
