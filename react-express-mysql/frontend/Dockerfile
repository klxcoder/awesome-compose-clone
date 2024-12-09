# syntax=docker/dockerfile:1.4

FROM node:22.12.0 AS development

WORKDIR /code

COPY package.json .
COPY yarn.lock .
# RUN rm -rf node_modules
RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "dev"]