FROM node:16.16.0-alpine

WORKDIR /usr/app/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]