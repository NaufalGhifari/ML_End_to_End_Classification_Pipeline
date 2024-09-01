# Use the official Node.js image
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Expose the application port
EXPOSE 3000

# Start the application with nodemon
CMD ["nodemon", "--legacy-watch", "index.js"]