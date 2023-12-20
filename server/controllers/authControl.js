import { User } from "../models/userModel.js";

export const signup = async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            const newUser = new User({ fullname, email, password });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } else {
            res.status(400).json({ error: 'Email already exists.' })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Email Not Found' })
        }

        const passwordMatch = await user.comparePassword(password);

        if (passwordMatch) {
            res.status(200).json({ message: 'Login Successful' });
        } else {
            res.status(401).json({ error: "Password Doesn't Matches" })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}