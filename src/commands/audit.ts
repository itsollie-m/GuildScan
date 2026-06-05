import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { Command } from "../types/command";

export const auditCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("audit")
    .setDescription("Run a full security audit on this server"),

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply("🔍 Running audit... (coming soon)");
  },
};