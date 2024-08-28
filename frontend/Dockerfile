FROM node

WORKDIR /frontend

COPY package.json package-lock.json ./

RUN npm install

RUN npx tailwindcss init -p ./tailwind.config.js

COPY . .
EXPOSE 3000

CMD ["npm", "run", "dev"]