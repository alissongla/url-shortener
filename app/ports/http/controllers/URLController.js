const { create } = require("../../../application/use_cases/URL/create");
const { show } = require("../../../application/use_cases/URL/show");
const Url = require("../../../infrastructure/database/schemas/Url");

const URLController = {
    async create(req, res) {
        res.startTime = Date.now();
        const { url, CUSTOM_ALIAS } = req.query;

        return await create(url, CUSTOM_ALIAS, res);
    },

    async show(req, res) {
        let urlId = req.params.urlId;

        return await show(urlId, res);
    }
}

module.exports = URLController