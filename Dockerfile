FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]