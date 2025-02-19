# Use official Node.js image as base
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the API Gateway code
COPY . .

# Expose the port API Gateway will run on
EXPOSE 5000

# Start the API Gateway
CMD ["npm", "run", "dev"]
