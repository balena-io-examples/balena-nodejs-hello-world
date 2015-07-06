#base-image for arm with node
FROM resin/armv7hf-node

# install deps on build server
RUN npm install express

# copy all files to /app dir
COPY . /app 

# Run server when container runs on device
CMD ["node", "/app/server.js"] 

MAINTAINER Craig Mulligan <craig@resin.io>