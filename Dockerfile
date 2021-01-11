 FROM node:12-alpine
 WORKDIR /user-demo
 COPY . .
 RUN npm install -production
CMD npx ts-node index
//编译成JS然后用js运行
