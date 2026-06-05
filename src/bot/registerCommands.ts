import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
import { commands } from "../commands";

dotenv.config();

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN!);

async function deployCommands() {
  try {
    console.log("📡 Registering slash commands...");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID!),
      {
        body: commands.map((cmd) => cmd.data.toJSON()),
      }
    );

    console.log("✅ Slash commands registered successfully");
  } catch (error) {
    console.error("❌ Failed to register commands:", error);
  }
}

deployCommands();