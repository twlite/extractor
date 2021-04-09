const Reverb = require("reverbnation-scraper");
const REGEX = /https:\/\/(www.)?reverbnation.com\/(.+)\/song\/(.+)/;

module.exports.validate = (str) => {
    return REGEX.test(str);
}

module.exports.getInfo = async (query) => {
    const data = await Reverb.getInfo(query).catch(() => {});
    if (!data) return null;

    return {
        title: data.title,
        duration: data.duration,
        thumbnail: data.thumbnail,
        engine: data.streamURL,
        views: 0,
        author: data.artist.name,
        description: "",
        url: data.url
    };
}

module.exports.important = true;