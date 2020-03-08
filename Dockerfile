FROM node:11-alpine
WORKDIR /home/node/app
ADD . .

COPY package.json /usr/src/app/
RUN npm install

COPY . /home/node/app

RUN npm ci

USER node

EXPOSE 3000
EXPOSE 5432
CMD ["node", "./src/server.js"]