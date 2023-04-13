FROM node:16-alpine 
WORKDIR /app
COPY package.json ./
RUN npm i 
COPY . .
RUN npm run build
ENV NODE_ENV production
EXPOSE 80
CMD [ "npm", "run", "serve:prod" ]