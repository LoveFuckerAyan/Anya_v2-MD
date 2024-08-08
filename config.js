const { readFileSync } = require('fs')
require('dotenv').config({path: './mongo.env'});
require('dotenv').config({path: './owner.env'});
require('dotenv').config({path: './session.env'});
require('dotenv').config({path: './bot.env'});

module.exports = {
    /**
     * bot details and parameters
     */
    botname: process.env.BotName || "Ayaan-Bot-Mode",
    footer: process.env.Footer || "© Love Fucker",
    prefa: process.env.Prefix || ".",
    themeemoji: process.env.ThemeEmoji || "💋",

    /**
     * owner details and parameters
     */
    ownername: process.env.Owner_Name || "Ayan-Daddy",
    ownernumber: process.env.Owner_Number || "923064896943",
    instagramId: process.env.Insta || "3.69_pika",

    /**
     * other details and parameters
     */
    author: process.env.Author || "@AyaanBotz",
    packname: process.env.PackName || "Ayan Akuma V2",
    socialLink: process.env.Web || "https://github.com/PikaBotz",
    groupLink: process.env.GcLink || "https://chat.whatsapp.com/FKMOcYjzzfgGql7p5H3Gmb",
    warns: Number(process.env.Warn_Limits) || 3,
    cooldown: 5, // default cooldown time per command in seconds
    mongoUrl: process.env.MongoDB || "YOUR_MONGODB_URL",
    sessionId: process.env.SESSION_ID || "NklvRFJCU_Queen-Anya_U_Queen-Anya_kjOEhsOWtxajVXT3V2SHk3WDA2U_Queen-Anya_1BWbmpKRFdDRlg2NWlPdVlLdlhmcHBSZw==",

    /**
     * thumbnails and medias
     */
    image_1: readFileSync('./lib/Assets/image_1.jpg'), // primary image
    image_2: readFileSync('./lib/Assets/image_2.jpg'), // secondry image
    imageUrl: "https://i.ibb.co/ZKKSZHT/Picsart-23-06-24-13-36-01-843.jpg", // image url, to replace to your url upload your image to https://imgbb.com
    imageMentionUrl: "https://i.ibb.co/ZKKSZHT/Picsart-23-06-24-13-36-01-843.jpg", // image for mention reply audio media
    aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
    menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
    ownerMentionMp3: readFileSync('./lib/Assets/ownerMentionMp3.mp3'),  // audio for mention reply audio media

    /**
     * core parameters and values
     */
    ownercon: { key: { fromMe: false, participant: '0@s.whatsapp.net', ...({ remoteJid: 'status@broadcast' }), }, message: { contactMessage: { displayName: this.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${this.ownername},;;;\nFN:${this.ownername}\nitem1.TEL;waid=${this.ownernumber}:${this.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: this.image_2, thumbnail: this.image_2, sendEphemeral: true } } },
    fakeshop: { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { orderMessage: { itemCount: 1234, status: 200, thumbnail: this.image_1, surface: 200, message: this.botname, orderTitle: this.ownername, ayaan: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore: 999, isForwarded: true}, sendEphemeral: true },
    message: {
        success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
        admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
        botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin bagart admin admin bano kb chlu ga, so I can't execute this command in this group. Bot want to be a Admin bgrt.",
        owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner maskeen insan. So you can't use this command pagal.",
        group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
        private: 'This command is only for private chats.',
        wait: '🔄 Processing request...',
        error: "❌ Oops! An error occurred while processing your request. Please try again later.",
        ban: `You're banned from using this bot!`,
        nsfw: 'This group is not *NSFW* enabled.',
        banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
    }
}
