FROM node:10

WORKDIR /code

ENV HTTP_PORT=8080
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 8080

CMD npm run dev
