FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# RUN npm run build
# Expose the port
EXPOSE 4000

# Start the server
CMD ["node", "index.js"]