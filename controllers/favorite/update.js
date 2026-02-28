import Favorite from "../../models/Favorite.js";

let updateFavorite = async (req, res, next) => {
    try {
        let updateFavorite = await Favorite.updateOne(
            {_id: req.body._id},
            {manga_id: req.body.manga_id}
        )
        return res.status(200).json({
            response: updateFavorite
        })
    } catch (error) {
        next(error)
    }
}

export default updateFavorite

