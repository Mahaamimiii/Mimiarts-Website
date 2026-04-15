# Mimiarts-Website
# 🚀 MimiArts-Website  
## Full-Stack Kubernetes Deployment Project

A complete **full-stack application deployment** using Docker and Kubernetes, demonstrating containerization and orchestration in a real-world setup.

---

## 📌 Project Overview

This project showcases how to **build, containerize, and deploy** a full-stack application using Docker and Kubernetes.

### The application includes:
- 🌐 Frontend (HTML, CSS, JavaScript)  
- ⚙️ Backend (Node.js + Express API)  
- 🐳 Deployment using Docker containers  
- ☸️ Orchestration using Kubernetes  

---

## 🧩 Tech Stack

| Layer            | Technology                     |
|------------------|------------------------------|
| Frontend         | HTML, CSS, JavaScript        |
| Backend          | Node.js (Express)            |
| Containerization | Docker                       |
| Orchestration    | Kubernetes                   |

---

## 📁 Project Structure
project-root/
├── frontend/ # UI (HTML, CSS, JS)
├── backend/ # Node.js Express API
├── k8s/ # Kubernetes YAML files
└── README.md


---

## 🔧 Features

- 🔗 Frontend communicates with backend via API  
- ⚙️ Backend exposes REST endpoints  
- 🐳 Fully containerized using Docker  
- ☸️ Kubernetes deployments and services  
- 🔄 Seamless frontend ↔ backend integration  

---

## ⚙️ How to Run

### 1️⃣ Build Docker Images

```bash
docker build -t frontend-image ./frontend
docker build -t backend-image ./backend

2️⃣ Deploy to Kubernetes
kubectl apply -f k8s/
3️⃣ Access the Application
http://localhost:3000

🎯 Output
✅ Frontend successfully fetches data from backend API
✅ Application runs smoothly inside Kubernetes cluster
✅ Demonstrates real-world microservices communication
