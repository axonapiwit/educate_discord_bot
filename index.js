const {
    Client,
    Intents
} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

client.on('ready', () => {
    console.log('your bot is ready')
})

const today = new Date();
const day = today.getDay();
console.log(day);

client.on('messageCreate', msg => {
    if (msg.content == '!help') {
        return msg.reply('**!help** - Display the help menu \n \n**!study** - Schedule to day');
    }
    if (msg.content == '!study') {
        if (day == 1) {
            return msg.reply('225351[2] Computer and Network Security ความปลอดภัยบนคอมพิวเตอร์และเครือข่าย เวลา 15.00-17.00');
        }
        if (day == 2) {
            return msg.reply('227372[1] Software Processes กระบวนการซอฟต์แวร์ เวลา 09.00-12.00 \n225351[2] Computer and Network Security ความปลอดภัยบนคอมพิวเตอร์และเครือข่าย เวลา 13.00 - 15.00 \n227423[2] Preparation for Software Engineering Professional Experience การเตรียมพร้อมฝึกประสบการณ์วิชาชีพวิศวกรรมซอฟต์แวร์ เวลา 15.00 - 17.00');
        }
        if (day == 3) {
            return msg.reply('227481[2] Software Quality and Measurement คุณภาพและการวัดซอฟต์แวร์ \nเวลา 13.00-16.00');
        }
        if (day == 4) {
            return msg.reply('227474[1] Software Evolution and Maintenance วิวัฒนาการและการบำรุงรักษาซอฟต์แวร์ เวลา 13.00-16.00 \n227321[2] Software Engineering Project I โครงงานทางวิศวกรรมซอฟต์แวร์ 1 เวลา 16.00-19.00');
        }
        if (day == 0, 5, 6) {
            return msg.reply('ไม่มีเรียน')
        }
    }
})

client.login(process.env.TOKEN)