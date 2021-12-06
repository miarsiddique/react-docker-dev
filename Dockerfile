FROM node:14-alpine

ENV NODE_VERSION 14.18.1

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR '/app'

COPY package.json .

RUN npm install
RUN npm install react-scripts@4.0.3 -g

COPY . .

CMD ["npm", "start"]
