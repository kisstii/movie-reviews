FROM node

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

ARG port
EXPOSE $port
CMD [ "node", "index.js" ]
