# Imagen temporal
FROM node:12-alpine as COMPILER

RUN mkdir /angular

WORKDIR /angular

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build --prod

# Con esta imagen se creará un contenedor

FROM nginx:alpine

COPY --from=COMPILER /angular/dist/app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



