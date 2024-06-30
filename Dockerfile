FROM node:lts-alpine3.20
WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 8000

ARG DB_HOST
ENV DB_HOST=$DB_HOST

ARG DB_USER
ENV DB_USER=$DB_USER

ARG DB_PASSWORD
ENV DB_PASSWORD=$DB_PASSWORD

CMD ["node", "build/main"]