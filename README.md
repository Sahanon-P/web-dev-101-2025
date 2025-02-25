# web-dev-101-2025

## Server Setup Guide
### Prerequiste

- Docker
- NodeJs

1. In the docker compose file if your device is running on `amd64` architecture please change docker tag from `arm-64` to `amd-64`
```yml
services:
   server:
    image: pazcalb/run2heaven-server:v1.0.0-arm64 # amd64
    ports:
      - 3100:3100
    environment:
      - NODE_ENV=production
      - PORT=3100
      - DATABASE_URL=postgres://postgres:1234@postgres:5432/run2heaven
    volumes:
      - ./images:/app/images
    networks:
      - run2heaven-network
   postgres:
     image: postgres
     environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 1234
      POSTGRES_DB: run2heaven
     volumes:
      - ./postgres-data:/var/lib/postgresql/data
     ports:
       - 5437:5432
     networks:
        - run2heaven-network
networks:
  run2heaven-network:
      
```
2. Run docker compose
```bash
docker compose up -d
```

3. Make sure that it start properly both database and server by look at docker desktop or type this command
```bash
docker ps
```

4. Open this URL to see API Specification `localhost:3100/api`

