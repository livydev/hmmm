import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File session.data.json')
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'session.data.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['host']
handler.command = /^(getdb)$/i

handler.rowner = true

export default handler