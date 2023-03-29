const {findByCustomAlias, updateAccessCount} = require("../../../infrastructure/repositories/URLRepository");
const {UrlNotFoundResponse} = require("../../../ports/http/responses/UrlNotFoundResponse");

async function show(urlId, res) {
    try {
        const url = await findByCustomAlias(urlId)

        if (url) {
            await updateAccessCount(url);
            return res.status(200).json({originalUrl: url.originalUrl});
        }
        return res.status(404).json(UrlNotFoundResponse);
    } catch (err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
}

module.exports = { show }