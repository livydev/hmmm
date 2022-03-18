import PhoneNumber from 'awesome-phonenumber'

async function handler(m) {

                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card

                    + 'VERSION:3.0\n' 

                    + 'N:;Della;;;'

                    + 'FN:Della\n' // full name

                    + 'ORG:CloudBotOwner;\n' // the organization of the contact

                    + 'TEL;type=CELL;type=VOICE;waid=6281224863098:+62 812-2486-3098\n' // WhatsApp ID + phone number

                    + 'END:VCARD'

                conn.sendMessage(m.chat, { contacts: { displayName: 'Della', contacts: [{ vcard }] } }, { quoted: m })

}

handler.help = ['owner', 'creator']

handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
