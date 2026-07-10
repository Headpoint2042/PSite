# syntax=docker/dockerfile:1

# ---- Stage 1: build the Vue app -> static files in /app/dist ----
FROM node:22-alpine AS build
WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Build the site
COPY . .
RUN npm run build

# ---- Stage 2: serve the built files with nginx ----
FROM nginx:alpine
# SPA-aware config: unknown routes fall back to index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
