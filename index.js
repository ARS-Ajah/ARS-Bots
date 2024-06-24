const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const functionsPath = path.join(__dirname, "functions");
const functionFiles = fs
  .readdirSync(functionsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of functionFiles) {
  const filePath = path.join(functionsPath, file);
  const handler = require(filePath);
  handler(client);
}

client.login(process.env.TOKEN);
