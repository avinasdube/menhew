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
            res.status(400).json({ error: 'Email already exists' })
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

        // comparing the password using custom method of User model
        const passwordMatch = await user.comparePassword(password);

        if (passwordMatch) {

            const accessToken = user.generateAccessToken();
            const refreshToken = user.generateRefreshToken();
            user.refreshToken = refreshToken;

            await user.save({ validateBeforeSave: false })

            const loggedInUser = await User.findOne({ email }).select("-password -refreshToken")

            const options = {
                httpOnly: true,
                secure: true
            }

            return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json({
                message: 'Login Successful',
                user: loggedInUser, accessToken, refreshToken
            });

        } else {
            res.status(401).json({ error: "Password Doesn't Matches" })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
