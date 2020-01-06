FROM node:10-alpine

WORKDIR /app/usr

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]