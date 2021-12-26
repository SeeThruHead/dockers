FROM node:16-alpine
WORKDIR /usr/src/app
ENV PATH="/usr/src/app/node_modules/.bin:${PATH}"

COPY package*.json yarn.lock /usr/src/app/
RUN yarn install --frozen-lockfile
RUN ln -s ./node_modules/.bin/ts-node run
