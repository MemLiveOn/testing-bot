const Discord = require("discord.js")
const { GatewayIntentBits } = require("discord.js")
require("dotenv").config()

const TOKEN = process.env.TOKEN

const client = new Discord.Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages
	]
})

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`)
})

client.login(TOKEN)