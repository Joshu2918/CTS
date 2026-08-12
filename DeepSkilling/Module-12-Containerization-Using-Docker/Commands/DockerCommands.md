\# Common Docker Commands



\## Check Docker Version



```bash

docker --version

```



\## Download an Image



```bash

docker pull nginx

```



\## List Images



```bash

docker images

```



\## Run a Container



```bash

docker run nginx

```



\## Run in Background



```bash

docker run -d nginx

```



\## Run with Port Mapping



```bash

docker run -d -p 8080:80 nginx

```



\## List Running Containers



```bash

docker ps

```



\## List All Containers



```bash

docker ps -a

```



\## Stop Container



```bash

docker stop container\_id

```



\## Remove Container



```bash

docker rm container\_id

```



\## Remove Image



```bash

docker rmi image\_id

```



\## Execute Command inside Container



```bash

docker exec -it container\_name bash

```



\## Build Image



```bash

docker build -t sampleapp .

```



\## Docker Compose



```bash

docker compose up

```



```bash

docker compose down

```

