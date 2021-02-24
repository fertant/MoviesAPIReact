FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy express server and React application.
COPY ./static-server/ ./static-server
COPY ./react-app/ ./react-app

# Load dependencies and build React app.
WORKDIR /usr/src/app/react-app
RUN npm i; npm build

# Load dependencies for express server.
WORKDIR /usr/src/app/static-server
RUN npm i

EXPOSE 8081
CMD [ "npm", "run", "start" ]