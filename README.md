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

## Phase 3

- Validation in controller
- Array naming: users
- jest.config: clearMocks
- prettier
- others
  - .nvmrc
- Containerize
  - Dockerfile
  - docker-compose.yml
  - script
  - Port from enviroment variables

## Phase 4

- Extract schema
- Format package.json
- Array naming: users
- Containerize
  - Compile and run
  - Dockerfile
    - install production packages
  - docker-compose.yml
    - postgres DB
    - user: jjl
    - password: jjl
    - db: demo
    - table: user
      - name: varchar
      - age: smallint
  - script
    - auto/start
      - 标准 shabang
    - http://localhost:3000/users
  - Port from enviroment variables
