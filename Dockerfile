FROM node

WORKDIR /src

COPY . /src

RUN npm install

# RUN npm run db:setup

EXPOSE 3000

CMD ["npm", "start"]