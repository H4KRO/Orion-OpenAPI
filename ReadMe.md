# Simple Orion OpenAPI documentation and tests with Swagger

## Build

Clone the project in your files

```bash
git clone https://github.com/H4KRO/Orion-OpenAPI.git
```

In project folder

```bash
docker build -t orion_openapi openapi/
```

## Run

In project folder

```bash
docker-compose up
```

Then, go to *http://localhost:3000/orion* to see the Swagger documentation.

## All in one 

### First use

```bash
git clone https://github.com/H4KRO/Orion-OpenAPI.git && cd Orion-OpenAPI && docker build -t orion_openapi openapi/ && docker-compose up
```

### Reuse

In project folder

```bash
docker-compose up
```