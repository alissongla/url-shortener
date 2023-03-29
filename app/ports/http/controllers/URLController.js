const { create } = require("../../../application/use_cases/URL/create");
const { show } = require("../../../application/use_cases/URL/show");
const { mostAccessed } = require("../../../application/use_cases/URL/mostAccessed");

const URLController = {
    async create(req, res) {
        res.startTime = Date.now();
        const { url, CUSTOM_ALIAS } = req.query;

        return await create(url, CUSTOM_ALIAS, res);
    },

    async show(req, res) {
        let urlId = req.params.urlId;

        return await show(urlId, res);
    },

    async mostAccessed(req, res) {
        return await mostAccessed(req, res);
    },
}

module.exports = URLController