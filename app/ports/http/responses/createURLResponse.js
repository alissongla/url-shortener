function createURLResponse(generatedUrl, res) {
  return {
    alias: generatedUrl.urlId,
    url: generatedUrl.shortUrl,
    statistics: {
      time_taken: Date.now() - res.startTime + "ms",
    }
  };
}

module.exports = { createURLResponse };