const Discord = require("discord.js")
const { GatewayIntentBits } = require("discord.js")
require("dotenv").config()
const generateImage = require ("./generateImage")

const TOKEN = process.env.TOKEN

const client = new Discord.Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers
	]
})

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`)
})


const welcomeChannelID = "1046665525939404901"


client.on("guildMemberAdd", async (member) => {
	const img = await generateImage(member)
	member.guild.channels.cache.get(welcomeChannelID).send({
		content: `<@${member.id}> Welcome to the server!`,
		files: [img]
	})
})

client.login(TOKEN)