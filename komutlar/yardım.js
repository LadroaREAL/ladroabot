const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLACK')
.setAuthor(`Ladroa#0001 Phobia Bot`)
.setDescription(`
\`p+rol-koruma\` : **Rol Koruma Aç/Kapat**
\`p+reklam-engel\` :  **Reklam Engel Aç/Kapat**
\`p+ban\`: **Etiketlediginiz Kişiyi Sunucudan Atar**
\`p+ban-log\`: **Ban Log Kanalını Ayarlar**
\`p+ban-limit\`: **Banlama Yetkisine Sahip Kişiler Limitden Fazla Kişi Banlayamazlar**
\`p+unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
\`p+sil\`:  **Belirttiğiniz Sayıda Mesajı Siler**
\`p+ping\`:  **Pinginizi Ölçüp Atar**
\`p+avatar\`:  **Avatarınızı Atar**
\`p+yapımcım\`:  **Botun Sahibini Gösterir**
\`p+herkeserolver\`:  **Herkese Belirlediginiz Rolü Verir**
\`p+herkestenrolal\`:  **Herkesden Rol Alır**
\`p+sa-as\`:  **Sa-As Sistemini Açarsınız**
\`p+yetkilerim\`:  **Yetkilerinizi Gösterir**
`)
.setImage("")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: 'yardım menüsü',
  usage: 'yardım'
};