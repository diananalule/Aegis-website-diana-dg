# AEGIS Website

Welcome to the **AEGIS Website** repository! 🚀 This project contains the **official website** of AEGIS, built with modern web technologies for high performance, scalability, and ease of maintenance.

## 📌 Project Overview
The website consists of:
- **Frontend**: Built with Next.js, utilizing TypeScript, Turbopack, ESLint, and Tailwind CSS for a highly optimized and responsive UI.
- **Backend**: Powered by Strapi, providing a headless CMS for content management and API generation.

## 🛠️ Technologies Used
### **Frontend**
- [Next.js](https://nextjs.org/) (with Turbopack)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

### **Backend**
- [Strapi](https://strapi.io/) (Headless CMS)
- Node.js & Express (Under Strapi)

### **Other Tools**
- Git & GitHub for version control
- Vercel for frontend deployment
- Strapi Cloud/Self-hosted for backend deployment

## 🚀 Getting Started
Follow these steps to set up the project locally.

### **1️⃣ Clone the Repository**
```bash
 git clone git@github.com:aibos-dev/aegis-grp-website-strapi.git
 cd aegis-grp-website-strapi
```

### **2️⃣ Install Dependencies**
#### **Frontend**
```bash
 cd frontend
 npm install
```
#### **Backend**
```bash
 cd ../aegis-backend
 npm install
```

### **3️⃣ Start the Development Servers**
#### **Frontend**
```bash
 cd ../aegis-frontend
 npm run dev
```
Runs on: `http://localhost:3000`

#### **Backend**
```bash
 cd ../aegis-backend
 npm run develop
```
Runs on: `http://localhost:1337/admin`

## 📂 Project Structure
```
aegis-grp-website-strapi/  (🔴 Main Git Repository)
├── aegis-frontend/  (✅ Next.js Frontend)
├── aegis-backend/   (✅ Strapi Backend)
```

## 🌎 Deployment
- **Frontend:** Deployed on [Vercel](https://vercel.com/)
- **Backend:** Deployed on Strapi Cloud / Self-hosted

## 🤝 Contributing
For contributors! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

