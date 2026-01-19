# https://docs.astro.build/en/recipes/docker/
# docker build -t bento-personal-site:latest .
# docker run -d -p 9009:8080 --name bento-personal-site bento-personal-site
# Use Node.js as the base image
FROM node:20 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of your project files into the container
COPY . .

# Build the Astro project
RUN pnpm run build

# Use a lightweight Node image for serving
FROM node:20-alpine

# Install http-server
RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port http-server will run on
EXPOSE 8080

# Start http-server
CMD ["http-server", "dist", "--cors", "-p", "8080"]