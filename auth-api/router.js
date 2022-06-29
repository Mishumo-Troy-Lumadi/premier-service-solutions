const express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');
const User = require('./models/user.model');

router.post('/signin', async (req, res) => {
	try {
		let content = req.body;
		let email = content.email;
		let password = content.password;

		var user = await User.findOne({ email });

		if (user) {
			let isValid = await bcrypt.compare(password, user.password);

			if (isValid) {
				user.password = undefined;
				res.status(200).json(user);
			} else {
				res.sendStatus(403);
			}
		} else {
			res.sendStatus(404);
		}
    } catch (error) {
        res.sendStatus(500);
    }
});

router.post('/signup', async (req, res) => {
	try {
		let content = req.body;

		var user = await new User(content).save();

		if (user) {
			res.status(201).json(user);
		} else {
			res.sendStatus(401);
		}
	} catch (error) {
		res.sendStatus(500);
	}
});

module.exports = router;
