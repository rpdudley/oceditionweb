# Use official Node.js image
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .
RUN npm install

COPY . .
# Build the Astro project
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built site from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]