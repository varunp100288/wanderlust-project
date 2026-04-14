# FROM node:18-alpine 14april2026
# WORKDIR /app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# EXPOSE 5000

# CMD ["node", "server.js"]

# ---------- Stage 1: Dependencies ----------
FROM node:18-alpine AS deps

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# ---------- Stage 2: Runtime ----------
FROM node:18-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -S app && adduser -S app -G app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy app code
COPY . .

# Change ownership
RUN chown -R app:app /app

# Switch to non-root user
USER app

# Expose port
EXPOSE 5000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
CMD wget --quiet --tries=1 --spider http://localhost:5000 || exit 1

# Start app
CMD ["node", "server.js"]