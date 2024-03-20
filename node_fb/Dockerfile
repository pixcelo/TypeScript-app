FROM node:20-alpine3.18
WORKDIR /app
COPY ./src/package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]