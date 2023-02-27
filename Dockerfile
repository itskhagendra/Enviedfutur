FROM node:18.14.2-alpine3.17
WORKDIR /usr/src/app
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN node --version
run npm --verison
# RUN npm install
# If you are building your code for production
RUN npm i --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]