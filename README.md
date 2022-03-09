# Theo X Till POS

A simple project, built with Next.js (BE + FE) with Jest as the testing framework, to solve and demonstrate the problem of having dynamic configurable discount strategies for each of the different customer.

## Run the project

### Using npm

To run the project in development mode, simply use the command:
```bash
npm run dev
```

To run in production ready mode:
- First build the project into distributable files:
```bash
npm run build
```
- Then start the server with:
```bash
npm start
```

### Using docker

First, build the project into a docker image using the command:
```bash
docker build -t <image:tag> .
```

Start a docker container to run a server at default port with:
```bash
docker run -p 3000:3000 <image:tag>
```

#### Afterwards, the application should be accessible via localhost http://localhost:3000
## Run Jest Tests

```bash
npm test
```
