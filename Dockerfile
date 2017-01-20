FROM node:7

RUN apt-get update && \
  apt-get install -y curl

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --silent
COPY . /usr/src/app

EXPOSE 4200

CMD [ "npm", "start" ]
