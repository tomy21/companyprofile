# Gunakan node sebagai base image
FROM node:18 as build

# Set working directory
WORKDIR /app

# Salin package.json dan package-lock.json untuk instalasi dependensi
COPY package.json package-lock.json ./

# Install dependensi
RUN npm install

# Salin semua file proyek ke dalam container
COPY . .

# Build proyek React
RUN npm run build

# Gunakan nginx sebagai base image untuk hosting proyek React yang sudah dibangun
FROM nginx:alpine

# Salin file sertifikat SSL ke dalam container
COPY certificate.crt /etc/nginx/certificate.crt
COPY private.key /etc/nginx/private.key

# Salin hasil build proyek React ke dalam direktori nginx
COPY --from=build /app/build /usr/share/nginx/html

# Salin konfigurasi nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 443 untuk HTTPS
EXPOSE 443

# Perintah untuk menjalankan nginx
CMD ["nginx", "-g", "daemon off;"]
