const Url = require("../database/schemas/Url");
const URLRepository = {
    async findOne(originalUrl){
        return Url.findOne({originalUrl});
    },

    async createUrl(urlId, originalUrl, shortUrl){
        let generatedUrl = new Url({
            urlId: urlId,
            originalUrl: originalUrl,
            shortUrl: shortUrl,
            date: new Date(),
        });

        return generatedUrl.save();
    },

    async findByCustomAlias(customAlias){
        return Url.findOne({urlId: customAlias});
    },

    async findByShortUrl(shortUrl){
        return Url.findOne({shortUrl});
    },

    async updateAccessCount(url){
        url.accessCount++;
        url.save();
    },

    async findMostAccessed(){
        return Url.find().sort({accessCount: -1}).limit(10);
    }
}

module.exports = URLRepository