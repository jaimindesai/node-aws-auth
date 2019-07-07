FROM node:10-alpine

LABEL Description="HTTP Backend" Vendor="Jaimin Desai" Version="3.3"  Maintainer="judesai@gmail.com"


# Docker layers to cache the npm install
WORKDIR /app

# This is needed for nodemon

ADD package*.json /app/
RUN npm install -g nodemon \
    && npm ci

# Now add app code
ADD . /app

RUN npm run compile



EXPOSE  3000
EXPOSE  5859

CMD [ "node", "dist/app.js" ]

