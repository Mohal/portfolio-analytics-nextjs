# Using official Node.js image
FROM node:20-alpine

# Settin' workin' directory
WORKDIR /app

# Copyin' package files first (better cachin')
COPY package*.json ./

# Installin' dependencies
RUN npm install

# Copyin' the rest of the project
COPY . .

# Buildin' Next.js application
# Commenting "npm run build" command for now because this is just for local development
# RUN npm run build

# Exposin' port
EXPOSE 3000

# Startin' Next.js
# For Production
# CMD ["npm", "start"]

# For Development/Local
CMD ["npm", "run", "dev"]