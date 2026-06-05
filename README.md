# 🛡️ GuildScan

Professional Discord server auditing and security analysis bot.

GuildScan helps server owners, admins, and developers understand their Discord server’s structure, security posture, and configuration health through automated audits and clear actionable insights.

---

## ✨ Features (MVP)

- 📊 Server statistics overview
- 🔐 Security scoring system (0–100)
- 👥 Role permission analysis
- 📁 Channel structure audit
- ⚠️ Detection of risky configurations
- 💡 Actionable improvement recommendations

---

## 🚀 Planned Features

- 📄 HTML audit reports
- 📈 Visual dashboards
- 🧠 AI-powered recommendations
- 📦 Exportable audit history
- 🌐 Web dashboard for multiple servers
- 🔔 Discord webhook alerts for security changes

---

## 🧠 Example Output

When running `/audit`, GuildScan generates a structured report like:

```
🛡️ Server Audit Report

Server: Example Guild
Members: 542
Channels: 34
Roles: 17

🔐 Security Score: 82/100 (B)

⚠️ Findings:
- 3 roles have Administrator permission
- @everyone can mention all roles
- 5 unused text channels detected

💡 Recommendations:
- Reduce number of admin roles
- Disable @everyone mention permission
- Archive unused channels
```

---

## 🛠️ Tech Stack

- TypeScript
- Node.js
- Discord.js v14
- dotenv

---

## 📦 Installation

```bash
git clone https://github.com/your-username/guildscan.git
cd guildscan
npm install
```

Create a `.env` file:

```env
TOKEN=your_bot_token
CLIENT_ID=your_application_client_id
```

---

## ▶️ Running the Bot

### Development Mode
```bash
npm run dev
```

### Deploy Commands
```bash
npm run deploy
```

---

## 📁 Project Structure

```
src/
├── commands/
│   └── audit.ts
├── services/
│   └── guildAudit.ts
├── utils/
│   └── scoring.ts
├── deploy-commands.ts
└── index.ts
```

---

## 🧪 Roadmap

- [ ] Basic `/audit` command
- [ ] Channel analysis engine
- [ ] Role permission scanner
- [ ] Security scoring system
- [ ] Embed-based reports
- [ ] HTML export system
- [ ] Web dashboard

---

## 🔐 Security Philosophy

GuildScan is designed with a “defensive-first” mindset:

- No data is stored externally by default
- All analysis runs on-demand
- Designed for transparency and server safety auditing

---

## 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

MIT License

---

## ⭐ Purpose

This project is part of an ongoing exploration into Discord automation, server tooling, and community infrastructure systems.
