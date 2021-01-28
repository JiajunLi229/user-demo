FROM node:12-alpine AS builder
WORKDIR /user-demo

COPY . .
RUN npm install && npx tsc

FROM node:12-alpine
WORKDIR /user-demo

COPY --from=builder /user-demo/dist .
RUN npm install
CMD sh -c "node dist/index.js"
EXPOSE 8888
ENV PORT 8888
##提供给线上使用，pro sit 用； 本地 docker-compose
## EXPOSE 端口
##docker run -P  how it works
