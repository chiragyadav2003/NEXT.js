FROM node:20.12.0-alpine3.19

WORKDIR /app

COPY package* .

RUN npm install

COPY . . 

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

# command to build docker image
# docker build -t nextapp-basic .