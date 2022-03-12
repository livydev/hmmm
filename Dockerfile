FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  npm install pm2 -g \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

ENV PM2_PUBLIC_KEY a977mqdqu63utty
ENV PM2_SECRET_KEY 10li9bc1krfwk5z

COPY package.json .

RUN npm install && npm install qrcode-terminal

COPY . .

EXPOSE 5000

CMD ["node", "index.js", "pm2-runtime", "app.js"]
