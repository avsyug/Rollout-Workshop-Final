FROM node:10.9.0-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g express
RUN npm install pug --save

EXPOSE 3000

COPY . ./

CMD npm run start
