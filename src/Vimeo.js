const Vimeo = require("./internal/Vimeo");

module.exports.validate = (q) => /(http|https)?:\/\/(www\.|player\.)?vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|video\/|)(\d+)(?:|\/\?)/.test(q);

module.exports.getInfo = async (query) => {
    const data = await Vimeo.getInfo(query.split('/').filter(x => !!x).pop()).catch(() => { });
    if (!data) return null;

    return {
        title: data.title,
        duration: data.duration * 1000,
        thumbnail: data.thumbnail,
        engine: data.stream.url,
        views: 0,
        author: data.author.name,
        description: "",
        url: data.url
    };
}

module.exports.important = true;