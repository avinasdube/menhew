
export const signup = async (req, res) => {
    try {
        const { name, email, password } = await req.body;
        res.json({ message: "hi from the signup controller" })
        console.log(name, email, password);
    } catch (error) {
        console.error("Error getting data : ", error);
    }
}