# 🎵 W8BDCR Discord Music Bot

> Lavalink-powered Discord music bot — play, queue, filters, 24/7 mode and more. No-prefix friendly, built for your server.

<p align="center">
  <a href="https://t.me/W8BDCR"><img src="https://img.shields.io/badge/Telegram-@W8BDCR-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" /></a>
  <a href="https://github.com/w8bdcr-official"><img src="https://img.shields.io/badge/GitHub-w8bdcr--official-00FF41?style=for-the-badge&logo=github&logoColor=black" /></a>
</p>

---

## 🚀 Install

```bash
git clone https://github.com/w8bdcr-official/W8BDCR-DISCORD-NO-PREFIX-MUSIC-BOT-WITH-COOL-FEATURES
cd W8BDCR-DISCORD-NO-PREFIX-MUSIC-BOT-WITH-COOL-FEATURES
npm install
```

Create a `.env` file with your own keys (never share them, never commit them):

```env
TOKEN=your-discord-bot-token
PREFIX=.
OWNERID=your-discord-user-id
MONGO_URI=your-mongodb-connection-string
NODE_HOST=lava.link
NODE_PORT=80
NODE_PASSWORD=your-lavalink-password
NODE_SECURE=false
LOGS=your-log-channel-id
COLOR=#2f3136
LANGS=en
```

Then start the bot:

```bash
npm start
```

**Needs:** Node.js 16, a Lavalink server, MongoDB, and a Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

---

## ✨ Features

- **Music** — `play`, `skip`, `queue`, `nowplaying`, `pause`, `resume`, `stop`, `loop`, `shuffle`, `clearqueue`, `volume`, `join`, `leave`, `autoplay`, `247` (24/7 stay-in-voice)
- **Sources** — YouTube, Spotify, Apple Music, Deezer and Facebook via Lavalink + erela.js plugins
- **Filters** — bassboost, nightcore, vaporwave and more (`filter` command)
- **Lyrics** — on-screen lyrics for the playing track
- **Info** — `help`, `ping`, `stats`, `uptime`, `node`, `invite`, `vote`, `profile`
- **Utility** — `avatar`, `serverinfo`, `membercount`, `server-icon`, `emojilist`
- **Config** — change the prefix any time with `setprefix`

Default prefix is `.` — change it in `.env` (`PREFIX`) or with `setprefix`.

---

## 🛠️ Built with

- [discord.js](https://discord.js.org) v13
- [erela.js](https://github.com/MenuDocs/erela.js) + Lavalink
- [better-erela.js-spotify](https://github.com/MrDodojooo) / erela.js-apple / erela.js-deezer / erela.js-facebook
- MongoDB (mongoose + quickmongo), top.gg SDK, lyrics-finder

---

## 📄 License

MIT — see [LICENSE](LICENSE).

## 💬 Support

Star the repo ⭐ and message us on Telegram: [@W8BDCR](https://t.me/W8BDCR)
