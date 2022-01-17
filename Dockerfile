# Set the Docker image
FROM node:16.13.2-alpine3.15
WORKDIR /usr/dev/

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY public ./public
COPY src ./src
COPY config-overrides.js ./config-overrides.js
COPY tsconfig.json ./tsconfig.json

# Expose development port
EXPOSE 3000

# Execute the app
RUN ls -la
CMD ["npm", "start"]
