FROM node:10-slim as build

WORKDIR /usr/src/app

COPY . ./

RUN npm ci

run npm run build -- --env.production

COPY package*.json ./dist/

COPY ./src/views ./dist/

FROM node:10-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist/ ./

RUN npm ci --only=production

# it is posible to define this on run but it is also ok to define it here
EXPOSE 5000 

CMD ["node", "bundle.js"]
