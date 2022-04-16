web: node . --server
bot: pm2 link 10li9bc1krfwk5z a977mqdqu63utty && pm2 start main.js && pm2 save && pm2 monit
worker: node . --db 'mongodb://mongo:ZBqaRcoF97sje7Ff1Owf@containers-us-west-37.railway.app:7303' --autocleartmp --restrict
new: node run/main.js
