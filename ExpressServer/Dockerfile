FROM node:10-alpine

WORKDIR /usr/app

COPY package*.json ./

# RUN npm install -g nodemon && npm install
RUN npm install
COPY src /usr/app/src
COPY server.js ./
# CMD ["npm", "run", "dev"]

CMD ["node", "./server.js"]