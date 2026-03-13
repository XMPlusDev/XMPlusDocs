# Build stage
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=8192" pnpm build

# Production stage
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/.output ./output

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "output/server/index.mjs"]
