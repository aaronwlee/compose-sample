# docker

Test docker

## image

- [x] nodejs-test PORT:9000

## reference

```
docker build -t <project_name> -f Dockerfile .
docker build -t "nodejs-test" .
docker run --env-file .env -p 8000:9000 nodejs-test
docker login
docker build -t <account>/docker-to-kubernetes .
docker image ls
docker push <account>/docker-kubernetes
```
