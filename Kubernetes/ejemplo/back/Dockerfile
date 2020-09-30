FROM node:lts-alpine3.10

RUN mkdir /app

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm install

COPY index.js .

CMD ["node","index.js"]