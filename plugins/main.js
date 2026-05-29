const config = require('../config');

module.exports = async (sock, msg, text, from) => {
    const cmd = text.toLowerCase().trim();

    if (cmd === config.PREFIX + 'menu' || cmd === config.PREFIX + 'help') {
        const menuText = `*👑 QUEEN HINATA COMMANDS 👑*\n\n*Prefix:* ${config.PREFIX}\n\n*1. ${config.PREFIX}alive* - Check bot status\n*2. ${config.PREFIX}menu* - Show command list\n\n_Powered by Cyber-X Engine_`;
        
        await sock.sendMessage(from, { 
            text: menuText 
        }, { quoted: msg });
    }
};
