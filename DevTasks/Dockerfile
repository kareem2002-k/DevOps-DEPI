# Use node LTS Alpine image as base
FROM node:lts-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json for npm install
COPY simple-task/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY simple-task/ .

# Build the application
RUN npm run build

# Use a lightweight node image to run the application
FROM node:lts-alpine

WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app/dist ./dist

# Expose port
EXPOSE 5173

# Set environment variables
ENV NODE_ENV production

# Install serve globally to serve the built files
RUN npm install -g serve

# Command to serve the application
CMD ["serve", "-s", "dist", "-l", "5173"]
