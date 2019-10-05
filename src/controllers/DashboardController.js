const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const user_id = req.headers.user_id;

        console.log(user_id);
        const spots = await Spot.find({ user: user_id });
        console.log({ user: user_id });
        console.log(spots);
        return res.json(spots);

    }
}