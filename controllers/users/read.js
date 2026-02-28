import User from "../../models/User.js"

let allUsers = async (req, res, next) => {
    try {
        let {id, email, role, online} = req.query
        let query = {}
        if(id)
        query._id = id
        if(email)
        query.email = {$regex: '^'+email, $options: 'i'}
        if(role)
            query.role = role
        if(online)
            query.online = online.toLowerCase()
        let all = await User.find(query)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

const validateToken = async (req, res, next) => {
    try {
        return res.status(200).json({
        response: {
        email: req.user.email,
        photo: req.user.photo,
        role: req.user.role}
        });
    } catch (error) {
        next(error);
    }
};

export { allUsers, validateToken }