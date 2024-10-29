let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝙎𝙚𝙧𝙥𝙚𝙣𝙩 𝘽𝙖𝙣;\nFN:𝙎𝙚𝙧𝙥𝙚𝙣𝙩 𝘽𝙖𝙣\nORG:𝙎𝙚𝙧𝙥𝙚𝙣𝙩 𝘽𝙖𝙣\nTITLE:\nitem1.TEL;waid=573246448227:573246448227\nitem1.X-ABLabel:𝙎𝙚𝙧𝙥𝙚𝙣𝙩 𝘽𝙖𝙣 👑\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝙎𝙚𝙧𝙥𝙚𝙣𝙩 𝘽𝙖𝙣 👑\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'お𝙎𝙚𝙧𝙥𝙚𝙣𝙩 𝘽𝙖𝙣 ⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
