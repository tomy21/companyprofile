# Gunakan image Node.js versi terbaru sebagai base image
FROM node:14-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode proyek ke dalam container
COPY . .

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Command untuk menjalankan aplikasi
CMD ["npm", "start"]
