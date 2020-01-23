FROM node:12-alpine

# work directory
WORKDIR /usr/app

COPY . .
# Copy dependencies first for effective caching
# COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]