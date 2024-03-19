# Build stage
FROM node:18 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl/certificate.crt /etc/nginx/certificate.crt
COPY ssl/private.key /etc/nginx/private.key
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
