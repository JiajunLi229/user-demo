FROM node:12-alpine
WORKDIR /user-demo/src
COPY . .
RUN npm install --production
EXPOSE 8888
ENV PORT 8888
CMD sh -c " npm install && npx tsc && sleep 3 && node dist/src/index.js"
##提供给线上使用，pro sit 用； 本地 docker-compose
## EXPOSE 端口
##docker run -P  how it works
