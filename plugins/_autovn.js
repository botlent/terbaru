
import fetch from 'node-fetch'

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.autoVn) {
    let sim = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
    let res = await sim.json()
        let tts = `https://danzzapi.xyz/api/tools/tts?text=${res.success}&lang=id-ID&apikey=danzz`
        conn.sendMessage(m.chat, { audio: { url: tts }, mimetype: 'audio/mp4' })
    }
}
