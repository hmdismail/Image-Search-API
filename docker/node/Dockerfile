FROM node:10

# install tools required for project
# ensures Dockerfile installs the latest package versions with no further coding or manual intervention.

RUN apt-get update && apt-get -y install netcat && apt-get clean

WORKDIR /app

# copying of local files into the container

COPY . /app/
COPY ./docker/entrypoint.sh /

EXPOSE 7001

RUN yarn install && yarn cache clean
RUN [ "chmod", "+x", "/entrypoint.sh"]

ENTRYPOINT [ "yarn", "start" ]  