FROM node:12-alpine
WORKDIR /user-demo/src
COPY . .
RUN npm install --production
ENV PORT 8888
CMD npx ts-node src/index
