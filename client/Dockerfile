FROM node:13.7.0-buster-slim

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN yarn

COPY . /usr/src/app/

CMD [ "yarn", "start" ]

EXPOSE 3000