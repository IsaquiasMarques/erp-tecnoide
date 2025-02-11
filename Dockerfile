FROM node:22.13.1
WORKDIR /app
COPY . .
RUN npm install
RUN npm install @angular/cli@19.1.6 -g
EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0" ]