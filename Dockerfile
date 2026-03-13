# ---- Build Stage ----
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN pnpm ci --ignore-scripts
    
# Copy source code
COPY . .

# Build the Nuxt 4 app
RUN pnpm build

# ---- Production Stage ----
FROM node:22-alpine AS production

WORKDIR /app

# Install PM2 globally
RUN pnpm install -g pm2

# Copy built output from builder
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

# Copy PM2 ecosystem config
COPY ecosystem.config.cjs ./

# Expose the app port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Start app with PM2 in foreground mode
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]