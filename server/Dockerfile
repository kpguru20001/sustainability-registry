# Dockerfile
FROM node:16

# create destination directory
RUN mkdir -p /usr/src/express-app
WORKDIR /usr/src/express-app

# Install app dependencies
COPY package*.json /usr/src/express-app/
RUN npm install

# Bundle app source
COPY . /usr/src/express-app/

EXPOSE 5050

ENV EXPRESS_HOST=0.0.0.0
ENV EXPRESS_PORT=5050

CMD npm run dev