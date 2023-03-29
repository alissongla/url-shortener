const {findMostAccessed} = require("../../../infrastructure/repositories/URLRepository");

async function mostAccessed(urlId, res) {
    try {
        const urls = await findMostAccessed()

        if (urls) {
            return res.status(200).json(urls);
        }
        return res.status(204).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
}

module.exports = { mostAccessed }