import express from 'express';

import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
	try {
		const newUser = await User.create(req.body);
        console.log(req.body)
		return res
			.status(201)
			.json({
				message: 'User created successfully',
				createdUser: newUser
			});
	} catch (error) {
        return res.status(500).json({message:'Error occured', error: error.toString()});
    }
});

router.get('/list', async (req, res) => {
    try {
        const userList = await User.find();
        return res.status(200).json(userList)
    } catch (error) {
        return res.status(500).json({message:'Error occured', error: error.toString()});
    }
})


export default router;
