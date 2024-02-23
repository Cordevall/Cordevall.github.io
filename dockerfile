# Use the Bun image as the base
FROM oven/bun

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN bun install

# Copy the rest of the source code
COPY . .

# Build the Astro project
RUN bun build

# Expose port  5000 for the application
EXPOSE  5000

# Define the command to run the application
CMD [ "bun", "start" ]