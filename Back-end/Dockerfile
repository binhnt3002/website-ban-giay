FROM node:20

EXPOSE 4444

WORKDIR /app

RUN npm i npm@latest -g

COPY ./ package.json package-lock.json ./

run npm install

COPY . .

ENV MONGO_URL="mongodb+srv://tanbinh159:Ping123@cluster0.lpysknq.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0"

RUN env

CMD ["node","index.js"]