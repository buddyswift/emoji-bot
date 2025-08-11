const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Replace this with your bot token
const token = process.env.token;
// Replace this with your target channel ID
const targetChannelId = '1400871183951593625';

// List of emoji IDs
const emojiList = [
    '424600128519667714', '424600420812587009', '424600844789612565',
    '424615028927234069', '424615627072864266', '492360214860005386', '492360497719672872',
    '492361159211483139', '511394575907160067', '529888915772014592', '529889294220001311',
    '533115655541620736', '533515922728681472', '533517264352313344', '537108939263836191',
    '550854706558140416', '561795752544698371', '562653407303958542', '582756543204687895',
    '591615769435963402', '669709171805126707', '718068287522734090', '735612914861342771',
    '747581339280211999', '755916488363343942', '780234040199479316', '786783398685310986',
    '803999776005685249', '820159270708051968', '965439232367808562', '982823072883163226',
    '1000411684436979772', '1096142265065410641', '1118306494484594801'
];

function getRandomEmojis(count) {
    const shuffled = emojiList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', message => {
    if (message.channel.id === targetChannelId && !message.author.bot) {
        const randomEmojis = getRandomEmojis(20); // Change the number to the desired count of random emotes
        randomEmojis.forEach(async (emoji) => {
            try {
                await message.react(emoji);
            } catch (error) {
                console.error('One of the emojis failed to react:', error);
            }
        });
    }
});

client.login(token);
