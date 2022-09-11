FROM node:alpine
WORKDIR /app
COPY package*.json .
COPY tsconfig.json .
RUN npm install --silent
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]