FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
COPY tsconfig*.json /usr/src/app/
COPY src /usr/src/app/src
RUN yarn
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production

EXPOSE 4000
CMD [ "node", "dist/server.js" ]