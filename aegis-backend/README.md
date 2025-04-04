# AEGIS Website Backend

Welcome to the **AEGIS Website Backend**! 🚀 This repository contains the backend system powering the AEGIS website, built using Strapi, a headless CMS.

## 📌 Overview
The backend serves as the content management system (CMS) and API provider for the frontend. It allows dynamic content updates, user authentication, and structured data management.

## 🛠️ Technologies Used
- [Strapi](https://strapi.io/) (Headless CMS)
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) (or SQLite for local development)
- [Cloudinary](https://cloudinary.com/) (for media storage)
- JWT Authentication for secure access

## 🚀 Getting Started
### **1️⃣ Clone the Repository**
```bash
git clone git@github.com:aibos-dev/aegis-grp-website-strapi.git
cd aegis-website/aegis-backend
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the project root and add the following configurations:
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=zooftecht_db
DATABASE_USERNAME=your_db_user
DATABASE_PASSWORD=your_db_password
JWT_SECRET=your_secret_key
ADMIN_JWT_SECRET=your_admin_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
> *Ensure you replace the placeholder values with actual credentials.*

### **4️⃣ Start the Development Server**
```bash
npm run develop
```
The backend will run at: `http://localhost:1337/admin`

## 📂 Project Structure
```
aegis-backend/
├── .strapi/            # Strapi system files
├── .tmp/               # Temporary files
├── config/             # Configuration files
├── database/           # Database setup
├── dist/               # Compiled Strapi files
├── node_modules/       # Dependencies
├── public/             # Public assets
├── src/                # Source code
│   ├── admin/          # Admin panel customization
│   ├── api/            # API endpoints
│   ├── extensions/     # Custom Strapi extensions
│   ├── index.ts        # Main entry point
├── types/              # TypeScript definitions
├── .env                # Environment variables
├── .env.example        # Example environment variables
├── .strapi.updater.json # Strapi version tracking
```

## 🤝 Contributing
For contributors! Please follow these steps:
1. Fork/clone the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.


