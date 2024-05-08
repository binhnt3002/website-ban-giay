FROM node:20

EXPOSE 4444

WORKDIR /app

RUN npm i npm@latest -g

COPY ./ package.json package-lock.json ./

run npm install

COPY . .

CMD ["node","index.js"]
