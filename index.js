module.exports = {
    internal: {
        Attachment: require("./src/internal/Attachment"),
        Facebook: require("./src/internal/Facebook"),
        Vimeo: require("./src/internal/Vimeo")
    },
    Attachment: require("./src/Attachment"),
    Facebook: require("./src/Facebook"),
    Lyrics: require("./src/ext/Lyrics"),
    Reverbnation: require("./src/Reverbnation"),
    Vimeo: require("./src/Vimeo"),
    version: require("./package.json").version
};