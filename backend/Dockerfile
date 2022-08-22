FROM node:16.16.0-alpine

COPY package*.json ./

WORKDIR /usr/app/api

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]