const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //1. Passwort hashen
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // 2. User erstellen
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    res.status(201).send("User has been added. Please log in now.");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  //ungefiltert direkt aus Formular (Eingabe durch Cookie Doe in Login-Formular)
  const { password } = req.body;
  //User-Match aus DB inklusive gehashtem Passwort
  const user = req.user;
  console.log("Daten aus DB dank Middleware", user);
  console.log("Daten aus Clientseitigem Formular", req.body);
  try {
    //1. Passwort checken = stimmen Email-Adresse + Passwort?
    const validPass = await bcrypt.compare(password, user.password);
    console.log("ist user.password = hashedPassword?", validPass);
    if (validPass) {
      //wenn gehashtes Passwort + Passwort aus dem Formular übereinstimmen, dann Token generieren und verschicken
      //1. Token erstellen
      const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
      console.log("token", token);
      return res.status(200).send(token);
    }
    return res.status(404).send("Invalid password!");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = { signUp, login };
