# Images

## Descarga

```
  docker pull centos
  docker pull centos:latest
  docker pull centos:7
```

## Para listar

```
  docker images
```

## Borrar

```
  docker image rm nginx2:centos7
```

## Crear contenedor

```
  docker run nginx:centos7
```

## Para listar contenedores

```
  docker ps
```

## Para eliminar un contenedor

```
  docker rm -f nervous_hoover
```

## Para ver los logs

```
  docker logs stupefied_shamir
```

## Para inspeccionar un contenedor

```
  docker inspect apache-script
```

## Listar imágenes huérfanas

```
  docker images -f dangling=true
```

## Eliminar imágenes huérfanas

```
 docker images -f dangling=true -q | xargs docker rmi -f
```
