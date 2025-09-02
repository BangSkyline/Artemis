# Étape de build
FROM node:18-alpine AS builder

WORKDIR /app

# Copie des fichiers de configuration
COPY package*.json ./
COPY next.config.ts ./
COPY tailwind.config.js ./
COPY postcss.config.mjs ./
COPY tsconfig.json ./
COPY eslint.config.mjs ./

# Installation des dépendances
RUN npm ci

# Copie de tout le code source
COPY . .

# Build de l'application
RUN npm run build

# Étape de production avec nginx
FROM nginx:alpine AS production

# Copie des fichiers statiques
COPY --from=builder /app/out /usr/share/nginx/html

# Exposition du port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
