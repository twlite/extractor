module.exports = (url) => {
    const _get = url.startsWith("http://") ? require("http") : require("https");

    return new Promise((resolve) => {
        _get.get(url, (res) => {

            const obj = {
                stream: res,
                url: url,
                format: res.headers['content-type']
            };

            resolve(obj);
        });
    });
}