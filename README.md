# cetak-landingpage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Docker

I assumed that in your machine already had Docker. for build the docker image for our cetakk app, you can do this like :
```sh
docker build -t firebase/dockerize-vue-app .
```

and then run docker container using :
```sh
docker run -it -p 8080:8080 --rm --name dockerize-vue-app-1 firebase/dockerize-vue-app
```

You should be able to access on `localhost:8080`

**Or**, if using `docker-compose` you can build the image with :
```sh
docker-compose up -d --build
```

Ensure the app is running on browser and test it again, if succedd stop the services using :
```sh
docker-compose stop
```