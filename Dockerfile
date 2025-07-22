FROM node:18-alpine
WORKDIR /app
COPY app/ .
CMD ["node", "index.js"]
