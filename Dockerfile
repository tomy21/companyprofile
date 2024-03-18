# Gunakan image Node.js versi terbaru sebagai base image
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode proyek ke dalam container
COPY . .

# Build proyek React
RUN npm run build

# Stage kedua untuk production build
FROM nginx:stable-alpine

# Copy hasil build proyek React dari stage pertama ke dalam container nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 untuk akses web
EXPOSE 80

# Command untuk menjalankan nginx saat container dijalankan
CMD ["nginx", "-g", "daemon off;"]
