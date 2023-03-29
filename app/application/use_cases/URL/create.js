const shortid = require("shortid");
const utils = require("../../../Util/util");
const URLRepository = require("../../../infrastructure/repositories/URLRepository");
const {createURLResponse} = require("../../../ports/http/responses/createURLResponse");
const {customAliasAlreadyExistsError} = require("../../../ports/http/responses/customAliasAlreadyExistsErrorResponse");

async function create(originalUrl, customAlias, res) {
    let generatedUrl;
    const base = `http://localhost:3333`;
    let urlId = shortid.generate()

    if(customAlias && customAlias.length > 0){
        urlId = customAlias;
    }

    if (utils.validateUrl(originalUrl)) {
        try {
            let searchCustomAlias = await URLRepository.findByCustomAlias(customAlias)

            if(searchCustomAlias){
                const responseJson = customAliasAlreadyExistsError(urlId)
                return res.status(400).json(responseJson);
            }

            const shortUrl = `${base}/${urlId}`;

            generatedUrl = await URLRepository.createUrl(urlId, originalUrl, shortUrl)
            const responseJson = createURLResponse(generatedUrl, res)
            return res.status(201).json(responseJson);

        } catch (err) {
            console.log(err);
            return res.status(500).json('Server Error');
        }
    } else {
        return res.status(400).json('Invalid Original Url');
    }
}

module.exports = { create }