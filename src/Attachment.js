const Attachment = require("./internal/Attachment");
const REGEX = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

module.exports.validate = (str) => {
    return str.length < 2083 ? REGEX.test(str) : false;
}

module.exports.getInfo = async (query) => {
    const data = await Attachment(query).catch(() => {});
    if (!data || !(data.format.startsWith('audio/') || data.format.startsWith('video/'))) return null;

    return {
        title: "Attachment",
        duration: 0,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/2/2a/ITunes_12.2_logo.png",
        engine: data.stream,
        views: 0,
        author: "MediaAttachment",
        description: "",
        url: data.url
    };
}

module.exports.important = true;