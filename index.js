const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require("discord.js");
const {token} = require("./config.json");

const prefix ='/';

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", () => {
    console.log("TestBot is online :|");

    client.user.setActivity("JavaScript on a server? We're doomed.", {type: "AFRAID"});
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const messageArray = message.content.split(" ");
    const arg1 = messageArray.slice(1);

    if (command === "test") {
        message.channel.send("Hello World!");
    }
})



client.login(token);