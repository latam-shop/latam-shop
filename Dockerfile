# --- Etapa 1: Base (Instalación de dependencias) ---
FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i

# --- Etapa 2: Development (Para correr en local) ---
FROM base AS development
COPY . .
# Exponemos ambos puertos pero solo se usarán según el servicio
EXPOSE 3000
EXPOSE 6006
ENV NODE_ENV=development
# El comando por defecto, pero lo sobrescribimos en el compose
CMD ["pnpm", "run", "dev"]

# --- Etapa 3: Builder (Para compilar la app de producción) ---
FROM base AS builder
COPY . .
RUN pnpm run build

# --- Etapa 4: Production (Imagen final ligera) ---
FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache libc6-compat

# Copiamos solo lo necesario para ejecutar (Next.js necesita .next, public y node_modules)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["pnpm", "start"]