const { Client } = require("genius-lyrics");
const client = new Client(process.env.GENIUS_API_KEY);

module.exports = function(query) {
    return new Promise((resolve, reject) => {
        if (typeof query !== "string") return reject(new TypeError(`Expected search query to be a string, received "${typeof query}"!`));

        client.songs.search(query)
            .then(async songs => {
                const data = {
                    title: songs[0].title,
                    id: songs[0].id,
                    thumbnail: songs[0].thumbnail,
                    image: songs[0].image,
                    url: songs[0].url,
                    artist: {
                        name: songs[0].artist.name,
                        id: songs[0].artist.id,
                        url: songs[0].artist.url,
                        image: songs[0].artist.image
                    },
                    lyrics: await songs[0].lyrics(false)
                };

                resolve(data);
            })
            .catch(() => {
                resolve([]);
            });
    });
};