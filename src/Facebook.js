const Facebook = require("./internal/Facebook");

module.exports.validate = Facebook.validateURL;

module.exports.getInfo = async (query) => {
    const data = await Facebook.getInfo(query).catch(() => { });
    if (!data) return null;

    return {
        title: data.title,
        duration: data.duration,
        thumbnail: data.thumbnail,
        engine: data.streamURL,
        views: parseInt(data.views) || 0,
        author: data.author.name,
        description: data.description,
        url: data.url
    };
}

module.exports.important = true;