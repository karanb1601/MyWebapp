FROM node:20
WORKDIR /mywebapp
COPY package.json .
COPY . .
EXPOSE 3000
CMD ["npm","start"]