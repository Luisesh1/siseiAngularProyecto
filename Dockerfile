FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean --force
RUN npm i
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm", "start"]