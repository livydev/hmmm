web: node . --server
bot: pm2 link 10li9bc1krfwk5z a977mqdqu63utty && pm2 start main.js && pm2 save && pm2 monit
worker: node . --db '' --autocleartmp --restrict
new: node run/main.js
