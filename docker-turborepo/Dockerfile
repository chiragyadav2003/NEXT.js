FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/web

COPY package* .

COPY packages ./packages

COPY . . 

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start-web-app"]

# command to build docker image
# docker build -t nextapp-basic .