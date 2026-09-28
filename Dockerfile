FROM node:24-alpine

WORKDIR /app

# Prepare node_modules so the non-root user can write to it
RUN mkdir -p /app/node_modules && chown -R node:node /app

# Don't run as root
USER node

EXPOSE 5173

CMD ["sh", "-c", "npm install && npm run dev -- --host 0.0.0.0"]