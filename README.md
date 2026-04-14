# Mimiarts-Website
Full-Stack Kubernetes Deployment Project

A complete full-stack application deployment using Docker and Kubernetes, demonstrating containerization and orchestration in a real-world setup.

📌 Project Overview

This project showcases how to build, containerize, and deploy a full-stack application using Docker and Kubernetes.

The application includes:

A frontend (HTML, CSS, JavaScript)
A backend (Node.js + Express API)
Deployment using Docker containers
Orchestration using Kubernetes
🧩 Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js (Express)
Containerization	Docker
Orchestration	Kubernetes
📁 Project Structure
project-root/
├── frontend/        ← UI (HTML, CSS, JS)
├── backend/         ← Node.js Express API
├── k8s/             ← Kubernetes YAML files
└── README.md
🔧 Features
Frontend communicates with backend via API
Backend exposes REST endpoints
Fully containerized using Docker
Kubernetes deployments and services
Seamless frontend ↔ backend integration
⚙️ How to Run
1️⃣ Build Docker Images
docker build -t frontend-image ./frontend
docker build -t backend-image ./backend
2️⃣ Deploy to Kubernetes
kubectl apply -f k8s/
3️⃣ Access the Application
http://localhost:3000
🐳 Docker
Created separate Dockerfiles for frontend and backend
Built images using docker build
Ran containers for isolated environments
☸️ Kubernetes
Used Deployments for managing pods
Used Services for exposing applications
Enabled communication between frontend and backend
🎯 Output
Frontend successfully fetches data from backend API
Application runs smoothly inside Kubernetes cluster
Demonstrates real-world microservices communication
💡 What I Learned
Docker containerization (images, containers, networking)
Kubernetes architecture (pods, deployments, services)
Full-stack deployment workflow
Service-to-service communication in Kubernetes
Real-world DevOps fundamentals
🚀 Future Improvements
Add CI/CD pipeline (GitHub Actions / Azure DevOps)
Use Ingress for routing
Deploy on cloud (AWS EKS / Azure AKS / GCP GKE)
Add monitoring (Prometheus + Grafana)
📌 Notes
Ensure Docker is running before building images
Kubernetes cluster (Minikube / Docker Desktop) should be active
Update service type (NodePort / LoadBalancer) if needed
