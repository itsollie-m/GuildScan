import { Client, GatewayIntentBits, Events } from 'discord.js';

export const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (c) => {
    console.log(`🟢 GuildScan online as ${c.user.tag}`)
});