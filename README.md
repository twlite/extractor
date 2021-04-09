# Extractors
Extractors for `discord-player`.

# Example

```js
const { Reverbnation } = require("@discord-player/extractor");
const player = new Player(client);

// enables reverbnation player
player.use("reverbnation", Reverbnation);
```