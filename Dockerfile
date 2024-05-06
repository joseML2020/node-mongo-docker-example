FROM node:20

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
COPY development.env ./
COPY production.env ./
COPY eslint.config.mjs ./
COPY config.js ./

RUN npm install 

# Copy the rest of the project files over to this directory
COPY . .

EXPOSE 8443

# Check if the database has been loaded
RUN if [! -f /usr/src/app/database_loaded ]; then \
  # Read the database and create the database_loaded file
  node /usr/src/app/scripts/read_database.js && touch /usr/src/app/database_loaded; \
fi

CMD ["npm", "run", "dev"]