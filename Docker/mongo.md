# Docker Mongo

1. Descargar la imagen de Mongo

```
docker pull mongo
```

2. Crear un volume

```
docker volume create mongo-autores
```

3. Crear un contenedor

```
docker run -d --name=mongo-autores -p 27018:27017 -v mongo-autores:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=LaS3rp13nt3DE0r0 mongo
```
