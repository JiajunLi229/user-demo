## Phase 1

ExpressJS API (TS):
- GET /repository
- GET /repository/:id
- DELETE /repository/:id
- POST /repository/:id
- PUT /repository/:id
- _PATCH /repository/:id_

user: {
  id: uuid
  name: 1 - 100
  age: 0 - 120
}

http://localhost:3000

额外完成：返回statusCode, errorCheck for type of input


## Phase 2

- Re-initialize codebase: user-demo
- GET /repository
  - GET /repository?name=:name
  - GET /repository?age=:age
- Default 404
- Decouple: router -> controller -> service -> repository
- Input validation: ajv (json schema)
- unit tests (repository, service)
  - jest
- husky
- eslint
- prettier
- others
  - .nvmrc
- _Containerize_
  - Dockerfile
  - docker-compose.yml
  - script
  - Port from enviroment variables
