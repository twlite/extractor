module.exports = (url) => {
    const _get = url.startsWith("http://") ? require("http") : require("https");

    return new Promise((resolve, reject) => {
        _get.get(url, (res) => {
            if (res.statusCode !== 200) return reject(new Error(`Status code: ${res.statusCode}`));

            const obj = {
                stream: res,
                url: url,
                format: res.headers['content-type']
            };

            resolve(obj);
        });
    });
}